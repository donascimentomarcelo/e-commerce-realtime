'use strict'

const Database = use('Database');
const User = use('App/Models/User');
const Role = use('Role');

class AuthController {

    async register({ req, res }) {
        const transaction = await Database.beginTransaction();
        try {
            const { name, surname, email, password } = req.all();

            const user = await User.create({ name, surname, email, password }, transaction);
            const userRole = await Role.findBy('slug', 'client');

            await user
                .roles()
                .attach([userRole.id], null, transaction);

            transaction.commit();

            return response
                .status(201)
                .send({ data: user });
        } catch (err) {
            await transaction.rollback();

            return response
                .status(400)
                .send({ message: 'Erro ao realizar cadastro!' });
        }
    }

    async login({ req, res, auth }) {

        const { email, password } = req.all();

        const data = await auth.withRefreshToken().attempt(email, password);

        return res.send({ data });
    }

    async refresh({ req, res, auth }) {
        const refreshToken = req.input('refresh_token') ?
            req.input('refresh_token') :
            req.header('refresh_token');

        const data = await auth.newRefreshToken().generateForRefreshToken(refreshToken);

        return res
            .status(200)
            .send({ data });
    }

    async logout({ req, res, auth }) {
        const refreshToken = req.input('refresh_token') ?
            req.input('refresh_token') :
            req.header('refresh_token');
        
        await auth.authenticator('jwt').revokeTokens([refreshToken], true);

        return response
            .status(204)
            .send({});
    }

    async forgot({ req, res }) {

    }

    async remember({ req, res }) {

    }

    async reset({ req, res }) {

    }
}

module.exports = AuthController
