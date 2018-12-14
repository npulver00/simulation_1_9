insert into houses(name, address, city, state, zip)
values(${name}, ${address}, ${city}, ${state}, ${zip})
returning *;