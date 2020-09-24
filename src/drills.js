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
    .select('price')
    .from('shopping_list')
    .limit(productsPerPage)
    .offset(offset)
    .then(result => {
        console.log(result)
      })
  }
  
  paginateProducts(2)

  function itemsAfterDay(days) {
  knexInstance
    .select('name')
    .count('date_added AS views')
    .where(
      'date_added',
      '>',
      knexInstance.raw(`now() - '?? days'::INTERVAL`, days)
    )
    .from('shopping_list')
    .groupBy('name')
    .then(result => {
      console.log(result)
    })
}
    itemsAfterDay(30)
