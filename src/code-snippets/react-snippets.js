// a file contains code snippets need in the react notes page

import { useEffect, useState } from "react";

// no default exports
export const friends = [
    {
        name: "Bob",
        age: "21",
    },
    {
        name: "Anna",
        age: "23",
    },
];

export const FriendList = (props) => {
    const { friends } = props;
    return friends.map((friend) => {
        return (
            <p>
                <span>Name: {friend.name} </span>
                <span>Age: {friend.age}</span>
            </p>
        );
    });
};

export const friendsText = `export const friends = [
    {
        name: "Bob",
        age: "21",
    },
    {
        name: "Anna",
        age: "23",
    },
];`;

export const FriendListText = `export const FriendList = (props) => {
    const { friends } = props;
    return friends.map((friend) => {
        return (
            <p>
                <span>Name: {friend.name} </span>
                <span>Age: {friend.age}</span>
            </p>
        );
    });
};`;

export const useEffectDemo = `const App = () => {
    const [name, setName] = useState("Bob");

    useEffect(() => {
        localStorage.setItem("name", name);
    }, [name]);

    return (
        <div>
            <label htmlFor="name">Enter a name:</label>
            <input type="text" name="name" id="name" value={name} />
        </div>
    );
};`;
