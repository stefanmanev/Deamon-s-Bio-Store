mocha.setup('bdd');
const { expect } = chai;
import { data } from 'data';
import { firebase } from 'firebase';

describe("User tests", () => {
	describe("Create user", () => {
		let createUser;
		beforeEach(() => {
			createUser = sinon.stub(data, "createUser");
		});
		afterEach(() => {
			createUser.restore();

		});
		it('Expect createUser to make a request', (done) => {
			let user = {
				email: "elapile@abv.bg",
				password: "elapila"
			};
			let response = {
				result: {
					username: user.username,
				}
			}

			createUser.returns(Promise.resolve(response));

			createUser(user)
				.then(() => {
					expect(createUser).to.have.been.calledOnce;
				})
				.then(done, done);

		});

		it('Expect createUser function to return a Promise', () => {
			const user = {
				email: 'elapile@abv.bg',
				password: 'elapila'
			};

			const response = {
				result: {
					username: user.username,
				}
			};

			createUser.returns(Promise.resolve(response));

			const promise = createUser(user);
			expect(promise).to.be.an.instanceof(Promise);
		});
	});
	describe("Login user", () => {
		let loginUser;
		beforeEach(() => {
			loginUser = sinon.stub(data, "loginUser");
		});
		afterEach(() => {
			loginUser.restore();

		});
		it('Expect loginUser to make a request', (done) => {
			let user = {
				email: "elapile@abv.bg",
				password: "elapila"
			};
			let response = {
				result: {
					username: user.username,
				}
			}

			loginUser.returns(Promise.resolve(response));

			loginUser(user)
				.then(() => {
					expect(loginUser).to.have.been.calledOnce;
				})
				.then(done, done);

		});

		it('Expect loginUser to return a Promise', () => {
			const user = {
				email: 'elapile@abv.bg',
				password: 'elapila'
			};

			const response = {
				result: {
					username: user.username,
				}
			};

			loginUser.returns(Promise.resolve(response));

			const promise = loginUser(user);
			expect(promise).to.be.an.instanceof(Promise);
		});
	});
	describe('LogOut tests', () => {
		let logOut;
		beforeEach(() => {
			logOut = sinon.stub(data, "logOut");
		});
		afterEach(() => {
			logOut.restore();

		});
		/*it('expect username to be cleared from localStorage', (done) => {
			logOut.returns(Promise.resolve());
			logOut()
				.then(expect(localStorage.getItem('signed-in-user-username')).to.be.null)
				.then(done, done);
		});

		it('expect authKey to be cleared from localStorage', (done) => {
			logOut.returns(Promise.resolve());
			logOut()
				.then(expect(localStorage.getItem('signed-in-user-auth-key')).to.be.null)
				.then(done, done);
		});*/

		it('expect signOut function to return a Promise', () => {
			logOut.returns(Promise.resolve());
			const promise = logOut();
			expect(promise).to.be.an.instanceof(Promise);
		});
	});
});

mocha.run();