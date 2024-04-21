import 'mocha';
import { expect } from 'chai';
import { Cartas, Color, Tipo, Rareza} from '../src/magic-app.js';
import { ColeccionCartas } from '../src/cartas.js';
import request from 'request';

// Prueba para la ruta GET /usuarios/:usuario/cartas
describe('GET /usuarios/:usuario/cartas', function() {
    it('debería obtener todas las cartas de un usuario', function(done) {
        request.get('http://localhost:3000/usuarios/usuario1/cartas', function(error, response, body) {
            // Verificar el estado de la respuesta
            expect(response.statusCode).to.equal(200);

            // Convertir la cadena JSON en un objeto JavaScript
            const responseBody = JSON.parse(body);

            // Verificar el cuerpo de la respuesta
            expect(responseBody).to.be.an('object'); // Verifica que el cuerpo sea un objeto

            done();
        });
    });
});

describe('POST /usuarios/:usuario/cartas', function() {
    it('debería agregar una carta correctamente', function(done) {
        const carta = {
            id: 24,
            nombre: 'pepe',
            coste_mana: 50,
            color: 'Azul',
            tipo: 'Criatura',
            rareza: 'Rara',
            texto_reglas: 'Nuevas reglas',
            valor_mercado: 500
        };

        request.post({
            url: 'http://localhost:3000/usuarios/joeymontana/cartas',
            json: carta
        }, function(error, response, body) {
            expect(response.statusCode).to.equal(200);
            done();
        });
    });
});

describe('DELETE /usuarios/:usuario/cartas/:id', function() {
    it('debería eliminar una carta correctamente', function(done) {
        request.delete('http://localhost:3000/usuarios/jovannie/cartas/1', function(error, response, body) {
            expect(response.statusCode).to.equal(200);
            done();
        });
    });
});

describe('GET /usuarios/:usuario/cartas', function() {
    it('debería obtener todas las cartas de un usuario', function(done) {
        request.get('http://localhost:3000/usuarios/usuario/cartas', function(error, response, body) {
            expect(response.statusCode).to.equal(200);
            done();
        });
    });
}); 