'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('CollectionPoints', [
      { latitude: -8.044478070533055, longitude: -34.941868977888205, accumulation_degree: 1, priority: 1, last_collection_date: new Date(), createdAt: new Date(), updatedAt: new Date() },
      { latitude: -8.051489362296518, longitude: -34.956202702580306, accumulation_degree: 2, priority: 2, last_collection_date: new Date(), createdAt: new Date(), updatedAt: new Date() },
      { latitude: -8.055653587235753, longitude: -34.94530220535936, accumulation_degree: 3, priority: 3, last_collection_date: new Date(), createdAt: new Date(), updatedAt: new Date() },
      { latitude: -8.048684860149102, longitude: -34.95070953862645, accumulation_degree: 4, priority: 1, last_collection_date: new Date(), createdAt: new Date(), updatedAt: new Date() },
      { latitude: -8.05701332487878, longitude: -34.95302696716948, accumulation_degree: 1, priority: 2, last_collection_date: new Date(), createdAt: new Date(), updatedAt: new Date() },
      { latitude: -8.052424192030784, longitude: -34.93955154934517, accumulation_degree: 2, priority: 3, last_collection_date: new Date(), createdAt: new Date(), updatedAt: new Date() },
      { latitude: -8.045478070533055, longitude: -34.941868977888205, accumulation_degree: 3, priority: 1, last_collection_date: new Date(), createdAt: new Date(), updatedAt: new Date() },
      { latitude: -8.052489362296518, longitude: -34.956202702580306, accumulation_degree: 4, priority: 2, last_collection_date: new Date(), createdAt: new Date(), updatedAt: new Date() },
      { latitude: -8.056653587235753, longitude: -34.94530220535936, accumulation_degree: 1, priority: 3, last_collection_date: new Date(), createdAt: new Date(), updatedAt: new Date() },
      { latitude: -8.049684860149102, longitude: -34.95070953862645, accumulation_degree: 2, priority: 1, last_collection_date: new Date(), createdAt: new Date(), updatedAt: new Date() },
      { latitude: -8.05801332487878, longitude: -34.95302696716948, accumulation_degree: 3, priority: 2, last_collection_date: new Date(), createdAt: new Date(), updatedAt: new Date() },
      { latitude: -8.053424192030784, longitude: -34.93955154934517, accumulation_degree: 4, priority: 3, last_collection_date: new Date(), createdAt: new Date(), updatedAt: new Date() },
      { latitude: -8.046478070533055, longitude: -34.941868977888205, accumulation_degree: 1, priority: 1, last_collection_date: new Date(), createdAt: new Date(), updatedAt: new Date() },
      { latitude: -8.053489362296518, longitude: -34.956202702580306, accumulation_degree: 2, priority: 2, last_collection_date: new Date(), createdAt: new Date(), updatedAt: new Date() },
      { latitude: -8.057653587235753, longitude: -34.94530220535936, accumulation_degree: 3, priority: 3, last_collection_date: new Date(), createdAt: new Date(), updatedAt: new Date() },
      { latitude: -8.050684860149102, longitude: -34.95070953862645, accumulation_degree: 4, priority: 1, last_collection_date: new Date(), createdAt: new Date(), updatedAt: new Date() },
      { latitude: -8.05901332487878, longitude: -34.95302696716948, accumulation_degree: 1, priority: 2, last_collection_date: new Date(), createdAt: new Date(), updatedAt: new Date() },
      { latitude: -8.054424192030784, longitude: -34.93955154934517, accumulation_degree: 2, priority: 3, last_collection_date: new Date(), createdAt: new Date(), updatedAt: new Date() },
      { latitude: -8.047478070533055, longitude: -34.941868977888205, accumulation_degree: 3, priority: 1, last_collection_date: new Date(), createdAt: new Date(), updatedAt: new Date() },
      { latitude: -8.054489362296518, longitude: -34.956202702580306, accumulation_degree: 4, priority: 2, last_collection_date: new Date(), createdAt: new Date(), updatedAt: new Date() },
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('CollectionPoints', null, {});
  }
};
