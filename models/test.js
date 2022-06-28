let data = require("../data/index");
module.exports = {
  findAll() {
    return data;
  },
  Create(id, nama) {
    data.push({ id, nama });
    return { id, nama };
  },
  Update(id, nama) {
    data = data.map((el) => {
      if (el.id === id) {
        el.nama = nama;
      }
      return el;
    });
    console.log(data);
    return { id, nama };
  },
  Delete(id) {
    // data.filter({ id, nama });
    // return { id, nama };
    data = data.filter((el) => el.id !== id);
    // const deleting = data
    return { id };
  },
  FindID(id) {
    const output = data.filter((el) => el.id === id);
    return output;
  },
};
