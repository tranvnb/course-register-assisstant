import store from '../../app/store';
import { startAuthenticating, successAuthenticating, failureAuthenticating } from './loginSlice';


describe("login reducer test", () => {

  test("get initial state test", () => {

    let state = store.getState().login;

    let expected = { 
      authenticating: false,
      isAuthenticated: false
    }

    expect(state).toEqual(expected);

  });

  test("startAuthenticating test", () => {

    let expected = { 
      authenticating: true,
      isAuthenticated: false,
      userCredentials: {
        email: "johndoe@test.com",
        password: "Password123"
      }
    };

    store.dispatch(startAuthenticating({ email: "johndoe@test.com", password: "Password123" }));

    let state = store.getState().login;

    expect(state).toEqual(expected);

  });

  test("failureAuthenticating test", () => {

    let expected = { 
      authenticating: false,
      isAuthenticated: false,
      userCredentials: {
        email: "johndoe@test.com",
        password: "Password123"
      }
    };
    
    store.dispatch(startAuthenticating({ email: "johndoe@test.com", password: "Password123" }));

    store.dispatch(failureAuthenticating());

    let state = store.getState().login;

    expect(state).toEqual(expected);

  });

  test("successAuthenticating test", () => {

    let expected = { 
      authenticating: false,
      isAuthenticated: true,
      userCredentials: {
        email: "johndoe@test.com",
        password: ""
      }
    };
    
    store.dispatch(startAuthenticating({ email: "johndoe@test.com", password: "Password123" }));

    store.dispatch(successAuthenticating());

    let state = store.getState().login;

    expect(state).toEqual(expected);

  });


});
