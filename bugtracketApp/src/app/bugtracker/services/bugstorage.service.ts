import { Bug } from  '../../models/bug';
export class BugStorageService{
    private currentBugId: number = 0;
    private storage = window.localStorage;

    save(bug: Bug){
        if (bug.id === 0){
            bug.id = ++this.currentBugId;
        }
        this.storage.setItem(`bug-${bug.id}`, JSON.stringify(bug));
    }

    remove(bug : Bug){
        this.storage.removeItem(`bug-${bug.id}`);
    }

    getAll(){
        const bugs = [];
        for(let index = 0, count = this.storage.length; index < count; index++){
            const key = this.storage.key(index);
            if (!key.startsWith('bug')) continue;
            const rawData = this.storage.getItem(key),
                bug = JSON.parse(rawData);
            bugs.push(bug);
            this.currentBugId = this.currentBugId > bug.id ? this.currentBugId : bug.id;
        }
        return bugs;
    }
}