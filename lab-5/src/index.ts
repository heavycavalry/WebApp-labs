function StandardAccess(constructorFn: Function): void {
  constructorFn.prototype.role = Role.Standard;
}
function ModeratorAccess(constructorFn: Function): void {
  constructorFn.prototype.role = Role.Moderator;
}
function AdminAccess(constructorFn: Function): void {
  constructorFn.prototype.role = Role.Admin;
}

function watch(
  target: object,
  propKey: string,
  descriptor: PropertyDescriptor
): void {
  const originalFn = target[propKey];
  descriptor.value = function (param: User) {
    console.log(`User: ${param} wants ${propKey}`);
    if (
      (param.role === Role.Moderator && propKey === "change") ||
      (param.role === Role.Standard && propKey === "change") ||
      (param.role === Role.Standard && propKey === "read")
    ) {
      console.log("You don't have access!");
      return;
    }
    return originalFn.call(this, param);
  };
}

enum Role {
  Standard = "Standard",
  Moderator = "Moderator",
  Admin = "Admin",
}

class User {
  name: string;
  surname: string;
  role: Role;

  toString(): string {
    return `${this.name} ${this.surname} ${this.role}`;
  }
}

@StandardAccess
class StandardUser extends User {
  constructor(name: string, surname: string) {
    super();
    this.name = name;
    this.surname = surname;
  }
}
@ModeratorAccess
class ModeratorUser extends User {
  constructor(name: string, surname: string) {
    super();
    this.name = name;
    this.surname = surname;
  }
}
@AdminAccess
class AdminUser extends User {
  constructor(name: string, surname: string) {
    super();
    this.name = name;
    this.surname = surname;
  }
}

class Resource {
  private resourceValue: string;
  constructor() {
    this.resourceValue = "Resource";
  }

  @watch
  public read(user: User): void {
    if (user.role === Role.Moderator || user.role === Role.Admin) {
      console.log(this.resourceValue);
    }
  }

  @watch
  public change(user: User): void {
    if (user.role === Role.Admin) {
      this.resourceValue = "Changed Resource";
    }
  }
}

const user1 = new StandardUser("Luke", "Skywalker");
const user2 = new ModeratorUser("Han", "Solo");
const user3 = new AdminUser("Obi-Wan", "Kenobi");

const res = new Resource();

console.log(user1.toString());
console.log(user2.toString());
console.log(user3.toString());

console.log("User 1:");
res.read(user1);
res.change(user1);
console.log("User 2:");
res.read(user2);
res.change(user2);
res.read(user3);
console.log("User 3:");
res.change(user3);
res.read(user3);
