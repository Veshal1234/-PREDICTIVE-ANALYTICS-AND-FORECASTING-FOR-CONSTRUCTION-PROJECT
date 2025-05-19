import React from 'react';

interface TabsProps {
  value: string;
  defaultValue?: string;
  onValueChange: (value: string) => void;
  children: React.ReactNode;
  className?: string;
}

interface TabsContextType {
  value: string;
  onValueChange: (value: string) => void;
}

const TabsContext = React.createContext<TabsContextType | null>(null);

export const Tabs: React.FC<TabsProps> = ({
  value,
  defaultValue,
  onValueChange,
  children,
  className = '',
}) => {
  return <div className={className}>{children}</div>;
};

interface TabsListProps {
  children: React.ReactNode;
  className?: string;
}

export const TabsList: React.FC<TabsListProps> = ({
  children,
  className = '',
}) => {
  return (
    <div className={`flex space-x-1 border-b border-gray-200 dark:border-gray-700 ${className}`}>
      {children}
    </div>
  );
};

interface TabsTriggerProps {
  value: string;
  children: React.ReactNode;
  className?: string;
  disabled?: boolean;
}

export const TabsTrigger: React.FC<TabsTriggerProps> = ({
  value,
  children,
  className = '',
  disabled = false,
}) => {
  const context = React.useContext(TabsContext);

  if (!context) {
    throw new Error('TabsTrigger must be used within Tabs');
  }

  const isActive = context.value === value;

  return (
    <button
      type="button"
      role="tab"
      aria-selected={isActive}
      disabled={disabled}
      onClick={() => context.onValueChange(value)}
      className={`px-3 py-2 text-sm font-medium rounded-t-lg ${
        isActive
          ? 'text-blue-600 dark:text-blue-400 border-b-2 border-blue-600 dark:border-blue-400'
          : 'text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300'
      } ${disabled ? 'opacity-50 cursor-not-allowed' : ''} ${className}`}
    >
      {children}
    </button>
  );
};

interface TabsContentProps {
  value: string;
  children: React.ReactNode;
  className?: string;
}

export const TabsContent: React.FC<TabsContentProps> = ({
  value,
  children,
  className = '',
}) => {
  const context = React.useContext(TabsContext);

  if (!context) {
    throw new Error('TabsContent must be used within Tabs');
  }

  return context.value === value ? (
    <div role="tabpanel" className={className}>
      {children}
    </div>
  ) : null;
};

export const Tabs_: React.FC<TabsProps> = ({
  value,
  defaultValue,
  onValueChange,
  children,
  className = '',
}) => {
  const initialValue = value || defaultValue || '';
  const [tabValue, setTabValue] = React.useState(initialValue);

  React.useEffect(() => {
    if (value !== undefined) {
      setTabValue(value);
    }
  }, [value]);

  const handleValueChange = React.useCallback(
    (newValue: string) => {
      setTabValue(newValue);
      onValueChange(newValue);
    },
    [onValueChange]
  );

  return (
    <TabsContext.Provider
      value={{
        value: tabValue,
        onValueChange: handleValueChange,
      }}
    >
      <div className={className}>{children}</div>
    </TabsContext.Provider>
  );
};