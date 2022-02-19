import ProfileReducer, { addPostActionCreator } from "./ProfileReducer";

// testirovanie
it('new post shold be added', () => {

    // 1. test data
let action = addPostActionCreator("hi test");
let state = {
    posts: [
        { id: 1, message: "hello1", like: 6 },
        { id: 2, message: "hello hihi", like: 4 },
    ],
}

// 2. action
let newTest=ProfileReducer(state,action)


// 3. verjnakan arjeqy
expect(newTest.posts.length).toBe(3)
});
