// // jest-dom adds custom jest matchers for asserting on DOM nodes.
// // allows you to do things like:
// // expect(element).toHaveTextContent(/react/i)
// // learn more: https://github.com/testing-library/jest-dom
// import '@testing-library/jest-dom';
// import { configure } from "enzyme";
// import Adapter from "enzyme-adapter-react-16";
// configure({ adapter: new Adapter() });
// import MockAdapter from "axios-mock-adapter";
// import { ajax } from './ajaxHelper';
// import { render, screen } from '@testing-library/react';
// import UserList from './components/userList';
// import { act } from 'react-dom/test-utils';

// const mockAxios = new MockAdapter(ajax)

// describe("testUserList", () => {
//     afterEach(() => {
//         jest.resetAllMocks();
//         jest.clearAllMocks();
//         jest.clearAllTimers();
//         mockAxios.reset();
//     })

//     const renderComponent = (props = {}) => render(<UserList {...props} />);

//     const getResponse = {
//         "page": 1,
//         "per_page": 6,
//         "total": 12,
//         "total_pages": 2,
//         "data": [
//             {
//                 "id": 1,
//                 "email": "george.bluth@reqres.in",
//                 "first_name": "George",
//                 "last_name": "Bluth",
//                 "avatar": "https://reqres.in/img/faces/1-image.jpg"
//             },
//             {
//                 "id": 2,
//                 "email": "janet.weaver@reqres.in",
//                 "first_name": "Janet",
//                 "last_name": "Weaver",
//                 "avatar": "https://reqres.in/img/faces/2-image.jpg"
//             },
//             {
//                 "id": 3,
//                 "email": "emma.wong@reqres.in",
//                 "first_name": "Emma",
//                 "last_name": "Wong",
//                 "avatar": "https://reqres.in/img/faces/3-image.jpg"
//             },
//             {
//                 "id": 4,
//                 "email": "eve.holt@reqres.in",
//                 "first_name": "Eve",
//                 "last_name": "Holt",
//                 "avatar": "https://reqres.in/img/faces/4-image.jpg"
//             },
//             {
//                 "id": 5,
//                 "email": "charles.morris@reqres.in",
//                 "first_name": "Charles",
//                 "last_name": "Morris",
//                 "avatar": "https://reqres.in/img/faces/5-image.jpg"
//             },
//             {
//                 "id": 6,
//                 "email": "tracey.ramos@reqres.in",
//                 "first_name": "Tracey",
//                 "last_name": "Ramos",
//                 "avatar": "https://reqres.in/img/faces/6-image.jpg"
//             }
//         ],
//         "support": {
//             "url": "https://reqres.in/#support-heading",
//             "text": "To keep ReqRes free, contributions towards server costs are appreciated!"
//         }
//     }
//     it("Should Render Component", async () => {
//         mockAxios.onGet("https://reqres.in/api/users").replyOnce(200, getResponse);
//         let component;
//         await act(async () => {
//             component = await renderComponent()
//         })

//         console.log(screen)
//         // expect(false).toBe(null)
//     })

// })
