export interface Task {
    id?: number; //cuando creamos podria no venir, cuando se crea una tarea no tiene un id, hasta que lo guardamos, o sea, es opcional
    text: string;
    day: string;
    reminder: boolean;
}
//Lo exporto para el mock-task