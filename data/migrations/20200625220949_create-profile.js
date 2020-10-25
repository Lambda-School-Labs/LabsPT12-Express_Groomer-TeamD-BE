exports.up = async function (knex) {
  await knex.schema
    .raw('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"')
    .createTable('profiles', function (table) {
      table.string('id').notNullable().unique().primary();
      table.string('email');
      table.string('first_name');
      table.string('last_name');
      table.timestamps(true, true);
      table.boolean('is_groomer').defaultTo(false);
    });
  await knex.schema
    .raw('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"')
    .createTable('groomer_profiles', (table) => {
      table.increments('id').notNullable().unique().primary();
      table.string('business_name');
      table.string('location_state');
      table.string('location_city');
      table.string('location_zip');
      table.string('profile_picture');
      table.string('document');
      table
        .string('profile_id')
        .notNullable()
        .references('id')
        .inTable('profiles')
        .onDelete('CASCADE')
        .onUpdate('CASCADE');
    });
};

exports.down = async function (knex) {
  await knex.schema.dropTableIfExists('groomer_profiles');
  await knex.schema.dropTableIfExists('profiles');
};

// We need groomer_profile_document
/// 1st field: groomer_profile_id
/// 2nd field: table.increments
/// 3rd field: document_url
/// 4th field: document_name

// We need groomer_profile_services
/// 1st field: groomer_profile_id
/// 2nd field: service_id
/// 3rd field: price (need to ask the stake-holder)
