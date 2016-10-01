import {Project} from "./project.model";
describe('Project model', () => {
  it('should create a project', () => {
   let project = new Project('1', 'Bridge Building', 'Ken Rimple', 'Started');
    expect(project.id).toBe('1');
    expect(project.owner).toBe('Ken Rimple');
    expect(project.name).toBe('Bridge Building');
    expect(project.status).toBe('Started');
  });
});
