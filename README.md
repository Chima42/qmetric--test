# QMetric JavaScript Developer Exercise

This exercise is to refactor and extend a simple supermarket cart app with new items and price-calculating logic. It is inspired by [Pragmatic Dave’s Supermarket Kata][kata].

[kata]: http://codekata.com/kata/kata01-supermarket-pricing/

## Getting started

Before making any changes to the code, you should:

1. Initialise a Git history within this directory by running `git init`.
2. Install the packages with `yarn`.
3. Run the tests with `yarn test`. If this is installed correctly, all the tests should pass. Any changes to the code should trigger a re-run of the relevant tests.
4. Start the app with `yarn start`. The app should start at [http://localhost:3000](http://localhost:3000). Any changes to the code should trigger a rebuild and a reload of the page.

## The Exercise

You have been given a simple app for a supermarket cart. It allows a set of different items to be added and removed from the cart, and calculates the total cost of the items in the cart.

The business requirements of the app are described below. The code partially implements these requirements, but some features are missing or incomplete, and the code also contains some errors.

You should modify the code to implement these requirements, making any relevant refactorings you like to support these changes, and fixing any other bugs that you find.

## The Requirements

The supermarket app should have the following items available for purchase:

- Bananas: 85p/kg
- Beans: 50p
- Cereal: £1.40
- Cola: 70p
- Eggs: £2.95 (1 dozen)
- Lemons: £1.40/kg
- Milk: 55p (1 pint)
- Oranges: £1.99/kg
- Pizza: £2.20
- Tea: £2.50 (80 bags)

Items in the cart should be displayed on separate rows, and it should be possible to remove the item from the cart by clicking its remove button.

Bananas, Oranges, and Lemons should be added to the cart by weight rather than an item at a time. A customer should specify the weight in kilograms of the item that they wish to add to the cart, which can be any positive number and not necessarily an integer. Each price-by-weight item should be displayed in the cart in a single row, and clicking that row's remove button should remove the item from the cart completely.

The following items should have discounts available:

- Beans have the discount "Three tins for the price of two";
- Cola has the discount "Two cans for £1";
- Pizza has the discount "Three for £6".

These discounts should be displayed on the item they are associated with. If a discount can be applied to any items in the cart, this discount should be displayed after the list of cart items. A discount can be applied multiple times on the same item: when this happens, the applied discounts should be displayed multiple times on separate rows. The app should show the subtotal (the total amount of the items before discounts are applied), the total amount saved, and the final total after the discounts are applied.

## The Aim of the Exercise

Our top priorities are to see:

- How you write _clean code_. We place a strong emphasis on quality, attention-to-detail, and extensibility.
- How you model business requirements in code. We encourage you to refactor the code in any way that you feel is valuable, and in particular to think about how easy it would be extend the code to support later requirements. What if a new type of discount or pricing method was added? What if a hundred new items were added to the shop?
- How you write unit tests. It is very important to us that tests are clear, simple, comprehensive, and assert on both the business rules and the user interface of the app. We encourage you to implement the app using TDD, and to commit often so we can see how the tests and new features develop over time.

We're also interested in seeing:

- The ability to create reliable and bug-free code;
- An understanding of core React principles and patterns;
- Knowledge of modern JS libraries and conventions.

While we encourage you to refactor the existing application code, we recommend that you focus on the code related to the business model and the testing. In particular:

- Keep the implementation front-end only. If this was a real app, cart item persistence and pricing logic would be implemented in a back-end service rather than directly within the UI, but this exercise implements them in a single codebase for simplicitly.
- Avoid introducing features that aren't explicitly mentioned in the business requirements.
- This is not an exercise on styling. The app uses [Semantic UI for React][rsui], but you should be able to make all the requested changes without introducing any new Semantic UI components or changing the styling of the existing components.
- Avoid making changes to the app set-up and configuration.

[rsui]: https://react.semantic-ui.com/

## Submitting

Push your solution to a new repository on Github. Once you are happy with it, send us a link to the repository.

We don’t put any time frame on the completion, and would much rather see a complete solution submitted later than an incomplete solution submitted faster.

If you have any questions at all please contact Tom Padberg or [dgarner@qmetric.co.uk](dgarner@qmetric.co.uk) and we will be happy to help.

Enjoy!
