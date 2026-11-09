# Type Narrowing in TypeScript

Type Narrowing হলো TypeScript-এর একটি গুরুত্বপূর্ণ বিষয়। এর মাধ্যমে কোনো variable এর নির্দিষ্ট type সম্পর্কে নিশ্চিত হওয়া যায়।condition check করার মাধ্যমে TypeScript বুঝতে পারে variable এ কোন type এর value আছে।

মনেকরি,একটি function এর parameter string ও হতে পারে আবার number ও হতে পারে। এখন আমরা চাই string হলে uppercase করব এবং number হলে তার দ্বিগুণ করব।

এক্ষেত্রে typeof ব্যবহার করতে পারি।

```typescript
const processValue=(value: string | number)=> {
    if (typeof value ==="string"){
        console.log(value.toUpperCase());
    } else {
        console.log(value * 2)
    }
}
```

**instanceof**

এটি ব্যবহার করে কোনো object একটি Class এর instance কি না পরীক্ষা করা যায়।

```typescript
class Car {}
const car = new Car();
if (car instanceof Car) {
    console.log("This is a Car");
}
```

**in:**

এটি ব্যবহার করে কোনো object এর মধ্যে নির্দিষ্ট property আছে কি না পরীক্ষা করা যায়।

```typescript
const user = { name: "Lipu", age: 25 };
if ("age" in user) {
    console.log(user.age);
}
```