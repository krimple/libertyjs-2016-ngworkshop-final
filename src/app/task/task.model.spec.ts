// in project-task.spec.ts (create it)
import {Task} from './task.model';

describe('Task', () => {
  it('should set the completed flag and completeDate when being marked complete', () => {
    let projectTask = new Task('1', 'do the dishes');
    projectTask.complete();
    expect(projectTask.completed).toBe(true);
    expect(projectTask.completedDate).toBeDefined();
  });
});
