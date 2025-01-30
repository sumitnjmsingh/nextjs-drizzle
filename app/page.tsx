"use client";
import { useState } from "react";
import { RiMenuUnfoldLine } from "react-icons/ri";
import { LuGitPullRequestClosed } from "react-icons/lu";
import Link from "next/link";
import { FaCogs, FaSearch, FaUsers } from "react-icons/fa";

export default function Home() {
const [isDrawerOpen, setIsDrawerOpen] = useState(false);

const toggleDrawer = () => {
  setIsDrawerOpen(!isDrawerOpen);
}

  return (
    <div className="bg-gray-900 text-white min-h-screen flex flex-col ">
      {/* Navbar */}
      <nav className="flex justify-between items-center p-4 bg-gray-800 shadow-md">
        <button onClick={toggleDrawer} className="p-4 text-white "><RiMenuUnfoldLine className="text-[25px]" /></button>
        <h1 className="text-xl font-bold">Nextjs-Drizzle</h1>
        <input type="text" placeholder="Search..." className="ml-2 w-1/3 px-2 py-1 text-black rounded-md" />
        <div className="ml-2 flex">
          <Link href="/pages"><button className="mr-2 px-4 py-2 border border-white rounded-md">Sign Up</button></Link>
          <Link href="/pages"><button className="px-4 py-2 bg-green-600 rounded-md">Log In</button></Link>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="flex flex-col md:flex-row">
        {/* Drawer on Left Side */}
        <div className={`fixed top-0 left-0 h-full w-64 bg-gray-800 shadow-lg p-6 hidden md:block transform transition-transform duration-300 ease-in-out ${isDrawerOpen ? 'translate-x-0' : '-translate-x-full'}`}>
         <button onClick={toggleDrawer} className=" p-4 text-white  text-[25px]"><LuGitPullRequestClosed /></button>
          <h2 className="text-xl font-semibold mb-4">Additional Features</h2>
          <ul className="space-y-2">
            <li>Live Collaboration</li>
            <li>Code Snippets</li>
            <li>Custom Themes</li>
            <li>Preprocessors Support</li>
            <li>Project Templates</li>
          </ul>
        </div>

        {/* Main Hero Section */}
        <header className={`flex-1 text-center py-20 px-4 ${isDrawerOpen ? 'md:ml-64' : 'md:ml-14'}  transform transition-transform duration-300 ease-in-out `}>
          <h2 className="text-4xl font-bold">The best place to build, test, and discover front-end code.</h2>
          <p className="mt-4 text-gray-400">
            Nextjs-Drizzle is a social development environment for front-end designers and developers.
          </p>
          <button className="mt-6 px-6 py-3 bg-green-600 rounded-md">Sign Up for Free</button>

          {/* Code Runner Placeholder */}
          <div className="mt-10 p-4 bg-gray-700 rounded-lg w-full h-64 flex justify-center items-center bg-[url('https://cpwebassets.codepen.io/assets/packs/lines-2-4e66616a5ef291c3566a7ddfe1ffaaa8.svg')] bg-no-repeat bg-right-top bg-contain">
            <p className="text-gray-300 ">
              
            <code className="block bg-gray-800 sm:p-1 rounded-md text-green-400  sm:w-[800px] tracking-[4px]">
      #include &lt;iostream&gt;<br />
      #include &lt;vector&gt;<br />
      #include &lt;string&gt;<br />
      using namespace std;<br /><br />
      
      int LCS(string X, string Y) <br />
           m = X.length();<br />
           n = Y.length();<br />
          ............<br />
          return dp[m][n];<br />
      
    </code>

            </p>
          </div>
        </header>
      </div>

      {/* Features Section */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 px-6 pb-16 ${isDrawerOpen ? 'md:ml-64' : 'md:ml-14'} transform transition-transform duration-300 ease-in-out bg-[url('https://cpwebassets.codepen.io/assets/packs/lines-3-4541e35a1939230404d773f7eeddcc9b.svg')] bg-no-repeat bg-left-bottom bg-contain">
        <div className="bg-gray-800 text-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow">
          <FaCogs className="text-4xl mx-auto text-blue-400" />
          <h3 className="text-xl font-semibold mt-4">Build & Test</h3>
          <p className="text-gray-400 mt-2">Get work done quicker by building out entire projects or isolating code to test features and animations. Want to keep it all under wraps? Upgrade to a PRO account to keep your work.</p>
          <button className="p-2 rounded-md mt-2 bg-neutral-700">Try The Editor</button>
        </div>
        <div className="bg-gray-800 text-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow">
          <FaSearch className="text-4xl mx-auto text-green-400" />
          <h3 className="text-xl font-semibold mt-4">Learn & Discover</h3>
          <p className="text-gray-400 mt-2">Want to upgrade your skills and get noticed? Participating in CodePen Challenges is a great way to try something new. We frequently feature these Pens on our homepage and across social!</p>
          <button className="p-2 rounded-md mt-2 bg-neutral-700">Join this Week’s Challenge</button>
        </div>
        <div className="bg-gray-800 text-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow">
          <FaUsers className="text-4xl mx-auto text-yellow-400" />
          <h3 className="text-xl font-semibold mt-4">Share Your Work</h3>
          <p className="text-gray-400 mt-2">Become a part of the most active front-end community in the world by sharing work. Presenting at a conference? Show your code directly in the browser with Presentation Mode.</p>
          <button className="p-2 rounded-md mt-2 bg-neutral-700">Explore Trending</button>
        </div>
      </section>

      {/* Bring the Whole Team Section */}
      <section className={`bg-gray-800 text-white p-10 rounded-lg shadow-md mx-6 md:mx-16 my-10 ${isDrawerOpen ? 'md:ml-64' : 'md:ml-14'} transform transition-transform duration-300 ease-in-out `}>
        <h2 className="text-3xl font-bold">Bring the Whole Team</h2>
        <p className="mt-4 text-gray-400">
          Each team and team member gets all the features of a <span className="bg-yellow-500 text-black px-2 py-1 rounded">PRO</span> membership. That means the Team can do things like upload Assets, use features like <strong>Collab Mode</strong>, Professor Mode, Presentation Mode, and Live View, and apply custom CSS to Posts, Profiles, and Embeds.
        </p>
        <button className="mt-6 px-6 py-3 bg-green-600 rounded-md">Start a Team</button>
        <div className="mt-6 flex flex-wrap justify-center items-center gap-8">
          <img src="airbnb.png" alt="Airbnb" className="h-8 mix-blend-lighten rounded-md " />
          <img src="grubhub.png" alt="Grubhub" className="h-8 mix-blend-lighten rounded-md " />
          <img src="netflix.png" alt="Netflix" className="h-8 mix-blend-lighten rounded-md " />
          <img src="adobe.png" alt="Adobe" className="h-8 mix-blend-lighten rounded-md " />
          <img src="salesforce.png" alt="Salesforce" className="h-8 mix-blend-lighten rounded-md " />
          <img src="microsoft.png" alt="Microsoft" className="h-8 mix-blend-lighten rounded-md " />
          <img src="lyft.png" alt="Lyft" className="h-8 mix-blend-lighten rounded-md " />
          <img src="ibm.png" alt="IBM" className="h-8 mix-blend-lighten rounded-md " />
        </div>

      </section>

      {/* Footer Section */}
      <footer className={`bg-gray-800 text-white py-8 px-6 md:px-16  ${isDrawerOpen ? 'md:ml-64' : 'md:ml-14'} transform transition-transform duration-300 ease-in-out `}>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-gray-400">
          <div>
            <h4 className="text-white font-bold">Nextjs-Drizzle</h4>
            <ul>
              <li>About</li>
              <li>Blog</li>
              <li>Podcast</li>
              <li>Documentation</li>
              <li>Support</li>
              <li>Advertise</li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold">For</h4>
            <ul>
              <li>Teams</li>
              <li>Education</li>
              <li>Privacy</li>
              <li>Embeds</li>
              <li>Asset Hosting</li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold">Social</h4>
            <ul>
              <li>YouTube</li>
              <li>X</li>
              <li>Instagram</li>
              <li>Mastodon</li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold">Community</h4>
            <ul>
              <li>Spark</li>
              <li>Challenges</li>
              <li>Topics</li>
              <li>Code of Conduct</li>
            </ul>
          </div>
        </div>
        <div className="text-center text-gray-500 mt-6">
          <p>&copy; 2025 Nextjs-Drizzle. <i>Demo or it didn't happen.</i></p>
          <p>
            <a href="#" className="underline">Terms of Service</a> &bull; <a href="#" className="underline">Privacy Policy</a>
          </p>
        </div>
      </footer>
    </div>
  );
}
