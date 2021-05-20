const {
  addNoteHandler,
  getAllNotesHandler,
  getNoteByIdHandler,
  editNoteByIdHandler,
  deleteNoteByIdHandler,
} = require('./handler');

const routes = [
  // Menampilkan semua Notes
  {
    method: 'GET',
    path: '/notes',
    handler: getAllNotesHandler,
  },

  // Menambah Note
  {
    method: 'POST',
    path: '/notes',
    handler: addNoteHandler,
  },

  // Melihat salah satu Note
  {
    method: 'GET',
    path: '/notes/{id}',
    handler: getNoteByIdHandler,
  },

  // Menyunting Note
  {
    method: 'PUT',
    path: '/notes/{id}',
    handler: editNoteByIdHandler,
  },

  // Menghapus Note
  {
    method: 'DELETE',
    path: '/notes/{id}',
    handler: deleteNoteByIdHandler,
  },
];

module.exports = routes;
