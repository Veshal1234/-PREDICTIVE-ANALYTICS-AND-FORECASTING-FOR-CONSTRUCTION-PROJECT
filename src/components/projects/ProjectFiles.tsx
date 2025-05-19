import React from 'react';
import { Project } from '../../types/project';
import { File, FileText, Image, Upload, Download, Trash2, Search, Filter, Plus } from 'lucide-react';

interface ProjectFilesProps {
  project: Project;
}

const ProjectFiles: React.FC<ProjectFilesProps> = ({ project }) => {
  // Sample file data - in a real app, this would come from the backend
  const files = [
    { id: 1, name: 'Site Plan.pdf', type: 'pdf', size: '5.2 MB', updatedAt: '2025-06-10', category: 'Plans' },
    { id: 2, name: 'Structural Design.pdf', type: 'pdf', size: '8.7 MB', updatedAt: '2025-06-15', category: 'Engineering' },
    { id: 3, name: 'Materials List.xlsx', type: 'excel', size: '1.3 MB', updatedAt: '2025-06-18', category: 'Procurement' },
    { id: 4, name: 'Budget Estimates.xlsx', type: 'excel', size: '0.9 MB', updatedAt: '2025-06-20', category: 'Financial' },
    { id: 5, name: 'Site Photo 1.jpg', type: 'image', size: '3.2 MB', updatedAt: '2025-06-22', category: 'Photos' },
    { id: 6, name: 'Contractor Agreement.docx', type: 'word', size: '1.1 MB', updatedAt: '2025-06-25', category: 'Legal' },
    { id: 7, name: 'Building Permit.pdf', type: 'pdf', size: '0.8 MB', updatedAt: '2025-06-28', category: 'Legal' },
  ];

  const getFileIcon = (type: string) => {
    switch (type) {
      case 'pdf':
        return <FileText className="h-5 w-5 text-red-500" />;
      case 'excel':
        return <FileText className="h-5 w-5 text-green-500" />;
      case 'word':
        return <FileText className="h-5 w-5 text-blue-500" />;
      case 'image':
        return <Image className="h-5 w-5 text-purple-500" />;
      default:
        return <File className="h-5 w-5 text-gray-500" />;
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <h3 className="text-lg font-medium text-gray-900 dark:text-white">Project Files & Documents</h3>
        <button
          className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          <Upload className="mr-2 h-4 w-4" />
          Upload Files
        </button>
      </div>

      {/* Filters and search */}
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-grow">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="text"
            placeholder="Search files..."
            className="block w-full pl-10 pr-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white sm:text-sm"
          />
        </div>

        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Filter className="h-5 w-5 text-gray-400" />
          </div>
          <select
            className="block w-full pl-10 pr-10 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white sm:text-sm"
          >
            <option value="">All Categories</option>
            <option value="Plans">Plans</option>
            <option value="Engineering">Engineering</option>
            <option value="Procurement">Procurement</option>
            <option value="Financial">Financial</option>
            <option value="Photos">Photos</option>
            <option value="Legal">Legal</option>
          </select>
        </div>
      </div>

      {/* Files list */}
      <div className="bg-white dark:bg-gray-800 shadow overflow-hidden rounded-lg">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
            <thead className="bg-gray-50 dark:bg-gray-700">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                  Name
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                  Category
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                  Size
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                  Updated
                </th>
                <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
              {files.map((file) => (
                <tr key={file.id} className="hover:bg-gray-50 dark:hover:bg-gray-750">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="flex-shrink-0">
                        {getFileIcon(file.type)}
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900 dark:text-white">
                          {file.name}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-500 dark:text-gray-400">{file.category}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-500 dark:text-gray-400">{file.size}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-500 dark:text-gray-400">
                      {new Date(file.updatedAt).toLocaleDateString()}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <div className="flex justify-end space-x-2">
                      <button className="text-blue-600 hover:text-blue-900 dark:text-blue-400 dark:hover:text-blue-300">
                        <Download className="h-4 w-4" />
                      </button>
                      <button className="text-red-600 hover:text-red-900 dark:text-red-400 dark:hover:text-red-300">
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* File categories */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {['Plans & Drawings', 'Permits & Legal', 'Progress Photos'].map((category) => (
          <div key={category} className="bg-white dark:bg-gray-800 shadow overflow-hidden rounded-lg p-4">
            <div className="flex justify-between items-center mb-4">
              <h4 className="text-lg font-medium text-gray-900 dark:text-white">{category}</h4>
              <button className="p-1 text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300">
                <Plus className="h-5 w-5" />
              </button>
            </div>
            <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {category === 'Plans & Drawings'
                  ? 'Upload blueprint documents, site plans, and architectural drawings.'
                  : category === 'Permits & Legal'
                  ? 'Store permits, contracts, and legal documentation for quick access.'
                  : 'Keep track of project progress with organized site photography.'}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectFiles;