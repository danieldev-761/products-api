export class Pagination {

    constructor(limit = 25){

        this.page = 1;
        this.limit = limit;
        this.total = 0;
    }

    setTotal(total){
        this.total = total;
    }

    nextPage(){

        if(this.page < this.totalPages){
            this.page++;
        }
    }

    prevPage(){

        if(this.page > 1){
            this.page--;
        }
    }

    get skip(){

        return (this.page - 1) * this.limit;
    }

    get totalPages(){

        return Math.ceil(this.total / this.limit);
    }
}