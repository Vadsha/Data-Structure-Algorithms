//find a mango seller in your social network
//first make a hash / graph (js object , map)
const friendsCircle = new Map();
friendsCircle.set('you' , ['alice' , 'bob' , 'clarie']);
friendsCircle.set('bob' , ['anuj' , 'peggy']);
friendsCircle.set('alice' , ['peggy']);
friendsCircle.set('clarie' , ['thom' , 'jonny']);
friendsCircle.set('anuj' , []);
friendsCircle.set('peggy' , []);
friendsCircle.set('thom' , []);
friendsCircle.set('jonny' , []);

//make a queue
class Queue {
    constructor() {
      this.people = [];
    }
  
    enqueue(person) {
      this.people.push(person); 
    }
  
    dequeue() {
      return this.isEmpty() ? null : this.people.shift();
    }
  
    isEmpty() {
      return this.people.length === 0;
    }
  
    size() {
      return this.people.length;
    }
  
    print() {
      console.log('in queue - ' , this.people.join(" -> "));
    }
  }

function isSeller(name) {
    return name[0] == 'j'
}
isSeller('name');
function search(name) {
    const queue = new Queue();
    friendsCircle.get(name).forEach(person => {
        queue.enqueue(person);
    });
    const searched = [];
    while (!queue.isEmpty()) {
        // queue.print();
        // console.log('searched - ' , searched);
        const searchPerson = queue.dequeue();
        // console.log('now searching - ',searchPerson)
        if(searchPerson && !searched.includes(searchPerson)) {
            if(isSeller(searchPerson)) {
                console.log(searchPerson + ' is a seller');
                return true;
            } else {
                // console.log(searchPerson , ' is not seller')
                friendsCircle.get(searchPerson).forEach((person) => {
                    queue.enqueue(person);
                })
                searched.push(searchPerson)
            }
        }
    }
    return false;
}

search('you')
