# Quest Completion Requirements

## Overview
Quests are now marked as complete when **16 out of 20 questions** are answered correctly (80% pass rate).

## Implementation Details

### 1. Completion Logic
- **Location**: `src/components/QuizModal.js`
- **Function**: `canComplete()`
- **Requirement**: 16+ correct answers out of 20 total questions
- **Previous**: Required all 20 questions to be correct (100%)

### 2. User Interface Updates
- Success message: "⚔️ TRIAL COMPLETE — X/20 correct (16+ required). You may claim your XP."
- Failure message: "✕ TRIAL FAILED — X/20 correct. You need at least 16 correct answers to pass."
- Pending message: "Answer all 20 questions to complete the trial. Need 16+ correct to pass."

### 3. LocalStorage Persistence
- **Storage Key**: `k8s_rpg_v3`
- **Location**: `src/hooks/useGameState.js`
- **Structure**: 
  ```json
  {
    "quests": {
      "1-1": true,
      "1-2": false,
      ...
    },
    "achievements": {
      "first-blood": true,
      ...
    }
  }
  ```

### 4. How It Works

#### When User Completes Quiz:
1. User answers all 20 questions
2. System calculates score (correct answers)
3. If score ≥ 16:
   - "Mark Complete" button appears
   - User clicks button
   - Quest is marked as done in state
   - State is automatically saved to localStorage
   - XP is awarded
   - Checkbox shows ✓

#### When App Loads:
1. `useGameState` hook loads state from localStorage
2. Quest checkboxes check `state.quests[questId]`
3. If `true`, checkbox displays ✓ and quest appears as "done"
4. Completed quests are visually distinct (opacity, strikethrough)

### 5. Visual Indicators

#### Quest Checkbox States:
- **Incomplete**: Empty checkbox, normal opacity
- **Complete**: ✓ in checkbox, reduced opacity, strikethrough text

#### Quiz Modal States:
- **In Progress**: Shows current score, progress bar
- **Passed (16+)**: Green success message, "Mark Complete" button
- **Failed (<16)**: Red failure message, "Retry" button

### 6. Testing Checklist
- [ ] Answer 16+ questions correctly → Should show "Mark Complete" button
- [ ] Answer <16 questions correctly → Should show "Retry" button
- [ ] Click "Mark Complete" → Quest checkbox should show ✓
- [ ] Reload page → Completed quests should remain checked
- [ ] Check localStorage → Should contain quest completion status
- [ ] Click completed quest → Should unmark it (toggle off)

### 7. Code Flow

```
User clicks quest checkbox
  ↓
handleQuestClick() in K8sQuizGame.js
  ↓
Opens QuizModal with questId
  ↓
QuizModal loads questions from JSON
  ↓
User answers questions
  ↓
Score calculated (16+ required)
  ↓
"Mark Complete" button appears
  ↓
User clicks "Mark Complete"
  ↓
handleQuestComplete() called
  ↓
markQuestDone(questId, true)
  ↓
State updated → useEffect saves to localStorage
  ↓
Checkbox shows ✓
```

## Notes
- Completion status persists across browser sessions
- Users can toggle quest completion by clicking completed quests
- XP is only awarded when quest is marked complete
- All quest completion data is stored in browser's localStorage

