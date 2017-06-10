import { normalize, schema, denormalize } from 'normalizr';
import { Record, List, Map, fromJS, OrderedMap} from 'immutable';

const data = {
  id: '123',
  author: {
    id: '1',
    name: 'Paul'
  },
  title: 'My awesome blog post',
  comments: [
    {
      id: '324',
      commenter: {
        id: '2',
        name: 'Nicole'
      }
    }
  ]
};

interface author {
    id: number;
    name: string;
}
interface comment {
    id: number;
    commenter: author;
}
interface post {
    id: number;
    author: author;
    title: string;
    comments: List<comment>;
}
interface AppState extends List<post> {};
const PostRecord = Record({
    id: 123,
    author: {
        id: 1,
        name: 'Paul'
    },
    title: 'My awesome blog post',
    comments: List<comment>()
});
const AuthorRecord = Record({
    id: 1,
    name: 'Paul'
});
const commentRecord = Record({

});

const init:AppState = List<post>();
let onePost: post = fromJS({
    id: 123,
    author: {
        id: 1,
        name: 'Paul'
    },
    title: 'My awesome blog post',
    comments: List<comment>()
});

const newState: AppState = init.push(onePost);
console.log(newState.toJS());
const a: AppState = newState.updateIn([0,'author', 'name'], ()=>'abc');
console.log(a.toJS());
const p = a.updateIn([0, 'comments'], list => list.push(fromJS({
    id: 324,
    commenter: {
        id: '2',
        name: 'Nicole'
    }
})));
console.log(JSON.stringify(p.toJS()));

/*const author = new schema.Entity('authors');
const comment = new schema.Entity('comments', {commenter: author});
const post = new schema.Entity('posts', {author: author, comments: [comment]});*/

interface Contact {
    id: number;
    name: string;
    star: boolean;
}

/*interface AppState extends List<Contact>{}

const init: AppState = List<Contact>();
const newState = init.push({
    id: 1,
    name: 'Wang',
    star: false
});
console.log(newState.toJS());
const c: AppState = (<any>newState).update(0, (contact: Contact) => {
    return {
        id: contact.id,
        name: contact.name,
        star: true
    }
});
console.log(c.toJS());
const k: AppState = c.push({
    id: 2,
    name: 'Yong',
    star: false
});
console.log(k.toJS());
const i: AppState = k.delete(0);
console.log(i.toJS());
*/
