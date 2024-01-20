import { Injectable } from '@angular/core';
    
@Injectable()
export class ProductService {
    getProductsData() {
        return [
            {
                type: 'Cash Reimbursable',
                language: 'English',
                domain: 'Suplier Contracts',
                intents: 12,
                entities: 96,
                documents: 12,
                assigned: 3,
                tagged: 6,
                trained: 3,
                status: "Assigned"
            },
            {
                type: 'Fixed Price',
                language: 'French',
                domain: 'Suplier Contracts',
                intents: 12,
                entities: 96,
                documents: 12,
                assigned: 3,
                tagged: 6,
                trained: 3,
                status: "Assigned"
            },
            {
                type: 'Fixed Price',
                language: 'English',
                domain: 'Suplier Contracts',
                intents: 12,
                entities: 96,
                documents: 12,
                assigned: 7,
                tagged: 7,
                trained: 7,
                status: "Assigned"
            },
            {
                type: 'Time and Materials',
                language: 'English',
                domain: 'Suplier Contracts',
                intents: 12,
                entities: 96,
                documents: 12,
                assigned: 7,
                tagged: 7,
                trained: 7,
                status: "Assigned"
            },
            {
                type: 'Distribution',
                language: 'English',
                domain: 'Suplier Contracts',
                intents: 12,
                entities: 96,
                documents: 12,
                assigned: 7,
                tagged: 7,
                trained: 7,
                status: "Assigned"
            },
            {
                type: 'Indefinite Delivery',
                language: 'English',
                domain: 'Suplier Contracts',
                intents: 12,
                entities: 96,
                documents: 12,
                assigned: 7,
                tagged: 7,
                trained: 7,
                status: "Assigned"
            },
            {
                type: 'Cash Reimbursable',
                language: 'English',
                domain: 'Suplier Contracts',
                intents: 12,
                entities: 96,
                documents: 12,
                assigned: 7,
                tagged: 7,
                trained: 7,
                status: "Assigned"
            },
            {
                type: 'Letter Subcontract',
                language: 'English',
                domain: 'Suplier Contracts',
                intents: 12,
                entities: 96,
                documents: 12,
                assigned: 7,
                tagged: 7,
                trained: 7,
                status: "Assigned"
            },
            {
                type: 'Time and MAterials',
                language: 'English',
                domain: 'Suplier Contracts',
                intents: 12,
                entities: 96,
                documents: 12,
                assigned: 7,
                tagged: 7,
                trained: 7,
                status: "Assigned"
            },
            
                  ];
    }

    getProductsMini() {
        return Promise.resolve(this.getProductsData());
    }


};