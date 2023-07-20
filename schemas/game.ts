export default{
    name: "game",
    type: "document",
    title: "Game",
    fields: [
        {
            name: "name", 
            type: "string", 
            validation: (Rule: any)=>Rule.required()
        },
        {
            name: "slug", 
            type: "slug", 
            options: {
                source: "name",
            },
            validation: (Rule: any)=>Rule.required()
        },
        {
            name: "images", 
            type: "array", 
            of: [
                {
                    type: "object", 
                    fields: [
                        {
                            name: "url",
                            type: "url",
                            title: "URL"
                        },
                        {
                            name: "file",
                            type: "file",
                            title: "File"
                        }
                    ],
                    validation: (Rule: any)=>Rule.required()
                }
            ]
        },
        {
            name: "price", 
            type: "number", 
            validation: (Rule: any)=>Rule.required().positive()
        },
        {
            name: "isFeatured", 
            type: "boolean", 
            validation: (Rule: any)=>Rule.required()
        },
        {
            name: "isTrending", 
            type: "boolean", 
            validation: (Rule: any)=>Rule.required()
        },
        {
            name: "category", 
            type: "reference",
            to: [{type: "category"}],
            validation: (Rule: any)=>Rule.required()
        },
        {
            name: "quantity", 
            type: "number", 
            validation: (Rule: any)=>Rule.required().integer().min(0)
        },
        {
            name: "description", 
            type: "text", 
            validation: (Rule: any)=>[
                Rule.required().min(5),
                Rule.custom((text: string) =>{
                    const wordsCount = text.trim().split(/\s+/).length;
                    if(wordsCount < 5){
                        return `Description must have a minumum of 5 words! ${wordsCount}/5`;
                    }
                    return true;
                })
            ]
        },
    ]
}