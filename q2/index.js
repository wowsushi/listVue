function solution(recipes) {
  const map = new Map()
  
  recipes.forEach(recipe => {
    const [food, ...ingredients] = recipe
    ingredients.forEach(ingredient => {
        const prev = map.get(ingredient) || []
        map.set(ingredient, [...prev, food])
    })
  })

  return [...map.entries()]
    .reduce((prev, item) => {
      const [ingredient, foods] = item
      if (foods.length <= 1) return prev

      foods.sort()
      const final = [ingredient].concat(foods)
      return [...prev, final]
    }, [])
    .sort()   
}

const recipes1 = [
  ["Salad", "Tomato", "Cucumber", "Salad", "Sauce"],
  ["Pizza", "Tomato", "Sausage", "Sauce", "Dough"],
  ["Quesadilla", "Chicken", "Cheese", "Sauce"],
  ["Sandwich", "Salad", "Bread", "Tomato", "Cheese"]
]

const recipes2 = [
  ["Pasta", "Tomato Sauce", "Onions", "Garlic"],
  ["Chicken Curry", "Chicken", "Curry Sauce"],
  ["Fried Rice", "Rice", "Onions", "Nuts"],
  ["Salad", "Spinach", "Nuts"],
  ["Sandwich", "Cheese", "Bread"],
  ["Quesadilla", "Chicken", "Cheese"]
]

solution(recipes1)
// output
// [
//   ["Cheese", "Quesadilla", "Sandwich"],
//   ["Salad", "Salad", "Sandwich"],
//   ["Sauce", "Pizza", "Quesadilla", "Salad"],
//   ["Tomato", "Pizza", "Salad", "Sandwich"]
//  ]

solution(recipes2)
// output
// [
//   ["Cheese", "Quesadilla", "Sandwich"],
//   ["Chicken", "Chicken Curry", "Quesadilla"],
//   ["Nuts", "Fried Rice", "Salad"],
//   ["Onions", "Fried Rice", "Pasta"]
//  ]