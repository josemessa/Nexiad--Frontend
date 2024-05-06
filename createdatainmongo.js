const { MongoClient } = require("mongodb");
const Chance = require("chance");

const chance = new Chance(); // Inicializa la instancia de Chance

// Configura la conexión a la base de datos
const url = "mongodb+srv://proyectobomba2024:wE00O9xRwnS20XdR@cluster0.yvednow.mongodb.net/"; // Cambia esta URL a la de tu base de datos
const dbName = "NEXIAD"; // Cambia este nombre por el de tu base de datos

// Genera datos de usuario aleatorios
function generateRandomUser() {
    return {
        firstname: chance.first(),
        surname: chance.last(),
        birthdate: chance.birthday({ string: true, year: chance.year({ min: 1960, max: 2000 }) }),
        email: chance.email(),
        password: chance.string({ length: 8, casing: 'lower', alpha: true, numeric: true }),
        subscription: chance.pickone(["free", "premium", "basic"]),
        role: chance.pickone(["admin", "user"]),
        phone: chance.phone(),
        address: `${chance.address()} ${chance.city()}, ${chance.state({ full: true })}, ${chance.country({ full: true })}`
    };
}

// Función principal para insertar 30 usuarios
async function insert30Users() {
    const client = new MongoClient(url, { useNewUrlParser: true, useUnifiedTopology: true });

    try {
        await client.connect();
        console.log("Conectado a la base de datos");

        const db = client.db(dbName);
        const usersCollection = db.collection("users");

        // Genera una lista de 30 usuarios aleatorios
        const users = [];
        for (let i = 0; i < 30; i++) {
            users.push(generateRandomUser());
        }

        // Inserta los 30 usuarios en la base de datos
        const result = await usersCollection.insertMany(users);
        console.log(`${result.insertedCount} usuarios insertados correctamente`);

    } catch (error) {
        console.error("Error:", error);
    } finally {
        await client.close();
    }
}

// Ejecuta la función para insertar 30 usuarios
insert30Users();
