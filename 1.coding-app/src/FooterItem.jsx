export default function FooterItem(){
    return(
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-2">
                    
                    <div>
                    <h2 className="font-bold">Getting Started</h2>
                    <ul className="text-gray-500">
                        <li>Overview</li>
                        <li>Setup Guide</li>
                        <li>Editor & IDE Recommendations</li>
                        <li>Version Control with Git</li>
                        <li>Setting Up Your Development Environment</li>
                    </ul>
                    </div>

                    <div>
                    <h2 className="font-bold">Core Concepts</h2>
                    <ul className="text-gray-500">
                        <li>Introduction to Programming Languages</li>
                        <li>Understanding Syntax and Semantics</li>
                        <li>Data Structures and Algorithms</li>
                        <li>Object-Oriented Programming</li>
                        <li>Functional Programming</li>
                        <li>Debugging Techniques</li>
                        <li>Best Practices in Coding</li>
                    </ul>
                    </div>

                    <div>
                    <h2 className="font-bold">Frameworks & Libraries</h2>
                    <ul className="text-gray-500">
                        <li>Web Development with JavaScript Frameworks (React, Angular, Vue)</li>
                        <li>Backend Development with Node.js, Django, Laravel</li>
                        <li>Mobile App Development with Flutter and React Native</li>
                        <li>Desktop Applications with Electron and .NET</li>
                    </ul>
                    </div>

                    <div>
                    <h2 className="font-bold">Resources & Community</h2>
                    <ul className="text-gray-500">
                        <li>Blog & Tutorials</li>
                        <li>Code Examples & Snippets</li>
                        <li>Documentation & API References</li>
                        <li>Forums & Discussion Boards</li>
                        <li>GitHub Repositories</li>
                        <li>Social Media Channels (Twitter, LinkedIn, YouTube)</li>
                    </ul>
                    </div>
                </div>
    );
}