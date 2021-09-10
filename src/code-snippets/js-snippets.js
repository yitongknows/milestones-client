export const bobInfo = `export const bobInfo = {
    name: "Bob",
    city: "Toronto",
    age: "21",
};`;

export const amyInfo = `export const amyInfo = {
    name: "Amy",
    city: "Vancouver",
    age: "23",
};`;

export const friendInfo = `export const friendInfo = { ...bobInfo, ...friendInfo };`;

export const friendInfoOut = `export const friendInfoOut = {
    name: "Bob",
    city: "Toronto",
    age: "21",
    name: "Amy",
    city: "Vancouver",
    age: "23"
};`;

export const restDemo = `export const { name, restInfo } = bobInfo;`;

export const restDemoOut = `{
    city: "Vancouver",
    age: "23",
};`;
