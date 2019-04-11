# Questions

1. How long did you spend on assessment? What would you add to your solution if you had more time? If you didn't spend much time on the coding test then use this as an opportunity to explain what you would add.
2. What part of the application are you most proud of. Please include a snippet of the code in the answer. 
3. How would you improve the APIs that you just used?
4. Please describe yourself using JSON.


# Answers

1. Probably 1.5 to 2 hrs ish. I would definitely add some basic component/service unit tests if I had more time to the service and eventually setup test framework for the mock http setup. I also know that I have to be wary of what the api can output, as it can affect the how the site behaves. As for the api fetched result, I would eventually add filtering,pagination and sorting features to the tables and make it appear closer to the intended design that I had in mind. Features like user-friendly error messages and validation messages for form submission have also been omitted as well because of time constraints.

2. For design I would say the usage of the tab was something I liked for something like this. As for something with code, the usage of the adapter pattern to format the json result as observable was something I can say that I am proud about.

In Angular the HTTPClient module by default results into json . 

In any file of the _models folder an implementation of the pattern.

`
export class CluesAdapter implements Adapter<Clues> {
    
    adapt(item: any): Clues {
       return new Clues(
         item.id,
         item.answer,
         item.question,
         item.value,
         item.airdate,
         item.created_at,
         item.updated_at,
         item.category_id,
         item.game_id,
         item.invalid_count,
        );
      }
}

`

In the HTTP Service - clues.services

` 
searchByCategory(id:number) : Observable<CategorySearch> {
    const url = this.baseurl + "/api/category?id=" + id.toString();
    return this.http.get(url).pipe(
      // mapping data to Plain Object
      map((data: any) => this.categorySearchAdapter.adapt(data))
    );
  } 
`
I like this because it makes it clear as to what the api output and adjusting is 
really simple and potential not bug-prone. I have dealt with legacy code even those which I created that I have lost track of what the api is outputting and how it has changed or what bug is causing the app to just not work. This kind of refactoring saved so much of my time trying scramble down memory lane to figure out what I have done or fix. 


3. I would improve the API by having some search engine based loose term searching for clues for any category so that it would be easier to look up for clues assuming you didn't know what was the exact category. I can see why it may have not been considered in this use case of the api design. I can also see that the amount of work to set everything up would be significant in terms of building,operating cost and maintenance.

4. Is there anything specific to be asked here? If not then I'll say the following I have used JSON throughout many projects that I have contributed and it's a simple and excellent way of sending formatted data. For the near future I am certain that I will be using JSON for most of my projects barring video and audio streaming components.