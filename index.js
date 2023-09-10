//I created a table named "customers" by using knex in here:
const knex = require("knex")({
  client: "mysql",
  connection: {
    host: "localhost",
    port: 3306,
    user: "root",
    password: "123456789",
    database: "orders",
  },
});

// knex.schema
//   .createTable("customers", function (table) {
//     table.increments("id").primary();
//     table.string("name");
//     table.string("lastname");
//   })
//   .then(() => {
//     console.log("table created");
//   })
//   .catch((err) => {
//     console.error("problem: " + err);
//   })
//   .finally(() => {
//     knex.destroy();
//   });

//in here , i added some values in table.
const customers = [
  { name: "bahar", lastname: "isikli" },
  { name: "özgür", lastname: " isikli" },
];

knex("customers")
  .insert(customers)
  .then(() => {
    console.log("customers added successfully!");
  })
  .catch((err) => {
    console.log("problem:" + err);
  })
  .finally(() => {
    knex.destroy();
  });

// //in here, ı updated some data
// const updateddata = {
//   name: "ayşe",
//   lastname: "yildiz",
// };
// knex("customers")
//   .where({ id: 1 }) //the data ı want to change
//   .update(updateddata)
//   .then(() => {
//     console.log("data has been updated.");
//   })
//   .catch((err) => {
//     console.log("problem:" + err);
//   })
//   .finally(() => {
//     knex.destroy();
//   });

//in here, ı deleted some data
// knex("customers")
//   .where({ id: 5 })
//   .delete()
//   .then(() => {
//     console.log("data has been deleted.");
//   })
//   .catch((err) => {
//     console.log("problem:" + err);
//   })
//   .finally(() => {
//     knex.destroy();
//   });
