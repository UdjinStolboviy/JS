let soldier = {
    health: 400,
    armor: 100
};

let john = {
    health: 100
};

john.__proto__ = soldier;

console.log(john);
console.log(john.armor);
// обектто орентирование  заклбчает  в  себе  идею  наследования  по ирархии каждого обекта как  в премере  солдат  по  ирархии  выше  чем джон юджон  наследует  свойства  солдата  армон.