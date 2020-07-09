import { Project } from  '../../models/projects';
export class ProjectStorageService{
    private currentBugId: number = 0;
    private storage = window.localStorage;

    save(project: Project){
        if (project.id === 0){
            project.id = ++this.currentBugId;
        }
        this.storage.setItem(`project-${project.id}`, JSON.stringify(project));
    }

    remove(project : Project){
        this.storage.removeItem(`project-${project.id}`);
    }

    getAll(){
        const bugs = [];
        for(let index = 0, count = this.storage.length; index < count; index++){
            const key = this.storage.key(index);
            if (!key.startsWith('project')) continue;
            const rawData = this.storage.getItem(key),
                bug = JSON.parse(rawData);
            bugs.push(bug);
            this.currentBugId = this.currentBugId > bug.id ? this.currentBugId : bug.id;
        }
        return bugs;
    }
}