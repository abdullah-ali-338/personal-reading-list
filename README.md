# Personal Reading List (State and Data)

A single-page reading list backed by a persistent storage implementation (`localStorage`), complete with handling for loading, error, and empty states, plus full item addition and deletion.

## Demonstrating All Three States (Reviewer Guide)

A dedicated testing toolbar is placed at the top of the interface so all states can be evaluated without touching source code:

1. **Empty State**:
   - Click the **"Force Empty State"** button (or delete every added item using the "Remove" buttons).
   - What happens: The view reveals a dedicated dashed empty container explaining that the list keeps track of books and articles, paired with a direct primary call-to-action button ("Add your first book") that moves focus to the title input.

2. **Error State**:
   - Click the **"Trigger Error State"** button.
   - What happens: The list enters an explicit error state styled with red accents and warning alerts. It details what failed ("Failed to synchronize with local persistent storage") and provides an actionable "Retry" button that recovers and reloads the data.

3. **Loading State**:
   - Click the **"Simulate Slow Load"** button.
   - What happens: The view triggers a 2.5-second simulated network/storage retrieval displaying an animated loading spinner and distinct descriptive text ("Loading reading list...").

4. **Populated State**:
   - Click **"Load Sample Data"** or use the input form to add books. Items persist across page refreshes.
