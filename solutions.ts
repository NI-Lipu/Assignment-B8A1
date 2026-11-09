const multiplyValue = (value: number, multiplier: number = 2): number => {
    return value * multiplier;
};




const processInput = (value: string | number | boolean): string | number => {
    if (typeof value === "string") {
        return value.trim().toLowerCase();
    } else if (typeof value === "number") {
        return value * 10;
    } else {
        if (value) return "Active";
        return "Inactive";
    }
};




const formatCoordinate = (coordinate: readonly [number, number, string]): string => {
    return `Location: ${coordinate[2]} (${coordinate[0]}, ${coordinate[1]})`;
};




const concatenateArrays = <T>(...arrays: T[][]): T[] => {
    const result: T[] = [];
    for (const array of arrays) {
        for (const item of array) {
            result.push(item);
        }
    }
    return result;
}




interface Course {
    title: string;
    students: number;
    isPublished: boolean;
}
const getPopularCourses = (courses: Course[], minStudents: number): Course[] => {
    return courses.filter(course => course.isPublished && course.students >= minStudents);
}




interface User {
    id: number;
    name: string;
    role: string;
}
const pluckValues = <T, K extends keyof T>(users: T[], Key: K): T[K][] => {
    return users.map(user => user[Key])
}




class Employee {
    protected name: string;
    private baseSalary: number;

    constructor(name: string, baseSalary: number) {
        this.name = name;
        this.baseSalary = baseSalary;
    }

    getDetails() {
        return `Employee: ${this.name}, Base Salary: ${this.baseSalary}`
    }
}
class Manager extends Employee {
    private department: string;

    constructor(name: string, baseSalary: number, department: string) {
        super(name, baseSalary);
        this.department = department;
    }

    getRoleInfo() {
        return `Manager of ${this.department}: ${this.name}`
    }
}





const validateAgeAsync = (age: number): Promise<string> => {
    return new Promise((resolve, reject) => {
        if (age < 18) reject(new Error("Access Denied: Must be 18 or older"));
        else {
            setTimeout(() => {
                resolve("Access Granted");
            }, 1000);
        }
    })
}


