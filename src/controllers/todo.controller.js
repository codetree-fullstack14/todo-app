// CRUD 작업을 위한 컨트롤러
// ToDo 모델을 가져온다.
// 서버에서의 동작
import Todo from '../models/todo.model.js';

// ToDo list 전체 가져오기
// 비동기로 async - 자바스크립트 문법
export const getAll = async (req, res, next) => {
try {
// Todo 스키마에서 찾는다.
// find()는 모든 문서를 찾는 메서드
const todos = await Todo.find().sort({ createdAt: -1 });
res.json(todos);
} catch (err) {
next(err);
}
};

export const create = async (req, res, next) => {
try {
const todo = new Todo({ title: req.body.title });
const saved = await todo.save();
res.status(201).json(saved);
} catch (err) {
next(err);
}
};

// 특정 ToDo 가져오기
// req.params.id는 URL 파라미터에서 id를 가져온다.
export const getById = async (req, res, next) => {
try {
const todo = await Todo.findById(req.params.id);
if (!todo) return res.status(404).json({ message: 'Not found' });
res.json(todo);
} catch (err) {
next(err);
}
};
// 특정 ToDo 업데이트
// req.params.id는 URL 파라미터에서 id를 가져온다.
// req.body는 요청 본문에서 데이터를 가져온다.
// { new: true } 옵션은 업데이트된 문서를 반환한다.
export const update = async (req, res, next) => {
try {
const updated = await Todo.findByIdAndUpdate(
req.params.id,
{ title: req.body.title, done: req.body.done },
{ new: true }
);

if (!updated) return res.status(404).json({ message: 'Not found' });
res.json(updated);
} catch (err) {
next(err);
}
};
// 특정 ToDo 삭제
// req.params.id는 URL 파라미터에서 id를 가져온다.
export const remove = async (req, res, next) => {
try {
const deleted = await Todo.findByIdAndDelete(req.params.id);
if (!deleted) return res.status(404).json({ message: 'Not found' });
res.status(204).end();
} catch (err) {
next(err);
}
};
