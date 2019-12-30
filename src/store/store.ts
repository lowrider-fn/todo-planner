import { Module } from 'vuex-simple';
import { Todo } from './modules/todo';

export class Store {

  @Module()
  public Todo = new Todo();
}