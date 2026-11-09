# type alias vs interface 
TypeScript-এ Type Alias  এবং Interface উভয়ই ব্যবহার করা হয় কাস্টম টাইপ বা অবজেক্টের স্ট্রাকচার নির্দিষ্ট করার জন্য।যদিও এদের কাজের মধ্যে অনেক মিল রয়েছে, তবুও এদের মূল আচরণ এবং ব্যবহারের ক্ষেত্রে কিছু গুরুত্বপূর্ণ পার্থক্য আছে।

নিচে বিস্তারিত আলোচনা করা হলো:

## Core Difference 1: কী define করতে পারে? 

**interface :**
interface মূলত object এর structure define করার জন্য ব্যবহৃত হয়। 
*যেমন:*

```typescript
interface Student {
    name: string;
    age: number;
    isStudent: boolean;
}
```
এখানে আমরা, Student object এর property এবং type নির্দিষ্ট করে দিয়েছি। 

**type:**
type alias  শুধু object নয়, primitive, union, tuple, function type সহ বিভিন্ন ধরনের type define করতে পারে।

**Example 1: Primitive type**
```typescript
type UserId = number;
let id: UserId = 101;
```
**Example 2: Object type**

```typescript
type Student= {
    name: string;
    age: number;
    isStudent: boolean;
}
```

## Core Difference 2: Declaration Merging 

একই নামে একাধিক interface declare করলে TypeScript তাদের properties একসঙ্গে merge করতে পারে। 

*যেমন:*
```typescript 
interface User {
    name: string;
}

interface User {
    age: number;
}
```
এখানে TypeScript error দেবে না। কিন্তু যদি একই কাজ type alias দিয়ে করতে যাই তাহলে TypeScript error দেবে।

## তাহলে কখন type এবং কখন interface ব্যবহার করবে? 
**interface**
1. Object-এর structure define করতে চাও।
2. একাধিক interface-এর মধ্যে extends ব্যবহার করতে চাও।
3. Declaration Merging প্রয়োজন।

**type**
1. Union type তৈরি করতে চাও।
2. Primitive type-এর alias তৈরি করতে চাও।
3. Tuple বা Function type define করতে চাও।

