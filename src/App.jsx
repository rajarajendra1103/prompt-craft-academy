import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Curriculum from './pages/Curriculum'; // This is now the "Courses" list page
import CourseCurriculum from './pages/CourseCurriculum'; // New detailed page
import Lesson from './pages/Lesson';
import PromptLibrary from './pages/PromptLibrary';
import UIElementsLibrary from './pages/UIElementsLibrary';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="courses" element={<Curriculum />} />
        <Route path="course/:courseId" element={<CourseCurriculum />} />
        <Route path="course/:courseId/:lessonId" element={<Lesson />} />
        <Route path="library" element={<PromptLibrary />} />
        <Route path="ui-dictionary" element={<UIElementsLibrary />} />
        {/* Fallback */}
        <Route path="*" element={<div style={{ padding: '40px', textAlign: 'center' }}>Page not found</div>} />
      </Route>
    </Routes>
  );
}

export default App;
