import { expect, should } from 'chai';
import { stub } from 'sinon';

import Todo from '../../models/Todo';

describe('Todo model', () => {
  let todo;
  beforeEach(() => {
    todo = new Todo();
  });
  it('Should not be completed after init', () => {
    expect(todo.get('completed')).to.be.false;
  });

  it('Should be completed after toggle', () => {
    stub(todo,'save', () => {
      todo.set('completed', true);
    });
    todo.toggle();
    expect(todo.get('completed')).to.be.true;
  });
});
