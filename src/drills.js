require('dotenv').config()
const knex = require('knex')


const knexInstance = knex({
  client: 'pg',
  connection: process.env.DB_URL
})

console.log('knex and driver installed correctly');

const searchTerm = 'Fish Tricks'

  knexInstance
  .select('name')
  .from('shopping_list')
  .where('name', 'ILIKE',  `%${searchTerm}%`)
  .first()
  .then(result => {
    console.log(result)
  })


function paginateProducts(page) {
  const productsPerPage = 10
  const offset = productsPerPage * (page - 1)
  knexInstance
  .select('*')
  .from('shopping_list')
  .limit(productsPerPage)
  .offset(offset)
  .then(result => {
    console.log(result)
  })
}

paginateProducts(2)

function productsAddedDaysAgo(daysAgo) {
  knexInstance
    .select('id', 'name', 'price', 'date_added', 'checked', 'category')
    .from('shopping_list')
    .where(
      'date_added',
      '>',
      knexInstance.raw(`now() - '?? days':: INTERVAL`, daysAgo)
    )
    .then(results => {
      console.log('PRODUCTS ADDED DAYS AGO')
      console.log(results)
    })
}

productsAddedDaysAgo(5)


function costPerCategory() {
  knexInstance
      .select('category')
      .from('shopping_list')
      .groupBy('category')
      .count('price AS total')
      .then(result => {
          console.log(result)
      })
}

  costPerCategory()