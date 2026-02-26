# Quiz Implementation Details

## Overview
The quiz modal now loads quiz data from `public/quiz_game_data.json` and displays it when clicking on quest checkboxes.

## How It Works

### 1. Quest Click Handler
- Located in `K8sQuizGame.js` - `handleQuestClick` function
- When a quest is clicked:
  - If already completed: unmarks it as done
  - If not completed: opens the quiz modal by setting `quizQuestId`

### 2. Quiz Modal Component
- Located in `QuizModal.js`
- Loads quiz data on mount from `/quiz_game_data.json` (in public folder)
- When a quest ID is provided, it looks up the questions in the JSON data
- JSON structure: `{ "quest-id": { "title": "...", "questions": [...] } }`

### 3. Quiz Data Structure
The JSON file should have this structure:
```json
{
  "1-1": {
    "title": "Quest Title",
    "questions": [
      {
        "tier": "beginner|intermediate|advanced",
        "question": "Question text?",
        "options": ["Option A", "Option B", "Option C", "Option D"],
        "correct": 0,
        "explanation": "Explanation text"
      }
    ]
  }
}
```

### 4. Features
- ✅ Dynamic tier badge counts (calculated from questions)
- ✅ Real-time score tracking
- ✅ Progress bar
- ✅ Immediate feedback on answer selection
- ✅ Explanation shown after answering
- ✅ Requires all questions correct to complete quest
- ✅ Retry functionality
- ✅ Close button

### 5. File Locations
- Quiz data: `public/quiz_game_data.json` (copied from `docs/quiz_game_data.json`)
- Component: `src/components/QuizModal.js`
- Styles: `src/components/QuizModal.module.css`

## Testing
1. Click on any incomplete quest checkbox
2. Quiz modal should appear with questions from the JSON file
3. Answer all questions correctly
4. Click "Mark Complete" to finish the quest
5. Quest should be marked as done and XP should be awarded

## Troubleshooting

### Quiz data not loading
- Ensure `quiz_game_data.json` is in the `public` folder
- Check browser console for fetch errors
- Verify the quest ID matches the key in the JSON file

### Questions not showing
- Verify the quest ID exists in the JSON file
- Check that the JSON structure matches the expected format
- Look for console errors

### Modal not appearing
- Check that `quizQuestId` is being set in `K8sQuizGame.js`
- Verify the modal CSS classes are applied correctly

