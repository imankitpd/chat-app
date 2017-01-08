const expect = require('expect');

const {Users} = require('./users');

describe('Users', () => {

    users = new Users();
    users.users = [{
        id: '1',
        name: 'Ankit',
        room: 'Nodejs'
    }, {
        id: '2',
        name: 'John',
        room: 'javascript'
    },{
        id: '3',
        name: 'Mike',
        room: 'Nodejs'
    }];

    it('should add new user', () => {
        var users = new Users();
        var user = {
            id: '123',
            name: 'Ankit',
            room: 'Nodejs'
        };

        var resUser = users.addUser(user.id, user.name, user.room);

        expect(users.users).toEqual([user]);
    });

    it('should remove a user', () => {
        var userId = '1';
        var user = users.removeUser(userId);

        expect(user.id).toBe(userId);
        expect(users.users.length).toBe(2);
    });

    it('should not remove a user', () => {
        var userId = '99';
        var user = users.removeUser(userId);

        expect(user).toNotExist(userId);
        expect(users.users.length).toBe(3);
    });

    it('should find user', () => {
        var userId = '2';
        var user = users.getUser(userId);

        expect(user.id).toBe(userId);
    });

    it('should not find user', () => {
        var userId = '99';
        var user = users.getUser(userId);

        expect(user.id).toNotExist(userId);
    });

    it('should return names for Nodejs', () =>  {
        var userList = users.getUserList('Nodejs');

        expect(userList).toEqual(['Ankit', 'Mike']);
    });

    it('should return names for javascript', () => {
        var userList = users.getUserList('javascript');

        expect(usersList).toEqual(['John']);
    });
});