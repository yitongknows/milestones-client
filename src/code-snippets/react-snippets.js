// a file contains code snippets need in the react notes page
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
