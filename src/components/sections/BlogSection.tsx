import React from 'react';
import { Card, CardContent, CardImage } from '../ui/Card';
import blogPosts from '../../data/blogPosts';
import Button from '../ui/Button';
import { Calendar, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface BlogSectionProps {
  limit?: number;
  title?: string;
  subtitle?: string;
}

const BlogSection: React.FC<BlogSectionProps> = ({
  limit = 3,
  title = "Latest Insights",
  subtitle = "Stay updated with the latest trends, tips, and industry news"
}) => {
  const displayedPosts = blogPosts.slice(0, limit);
  
  return (
    <section className="py-16 bg-gray-50" id="blog">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">{title}</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">{subtitle}</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedPosts.map((post) => (
            <Card key={post.id} hover={true} className="h-full flex flex-col">
              <CardImage 
                src={post.image} 
                alt={post.title} 
              />
              <CardContent className="flex-grow flex flex-col">
                <div className="mb-3 flex items-center text-gray-500 text-sm">
                  <Calendar className="h-4 w-4 mr-1" />
                  <span>{post.date}</span>
                  <span className="mx-2">•</span>
                  <span>{post.category}</span>
                </div>
                
                <h3 className="text-xl font-semibold text-blue-900 mb-2">
                  <Link 
                    to={`/blog/${post.slug}`}
                    className="hover:text-blue-700 transition-colors"
                  >
                    {post.title}
                  </Link>
                </h3>
                
                <p className="text-gray-600 mb-4 flex-grow">{post.excerpt}</p>
                
                <Link 
                  to={`/blog/${post.slug}`}
                  className="text-blue-700 font-medium inline-flex items-center group mt-auto"
                >
                  Read more
                  <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button
            variant="outline"
            onClick={() => window.location.href = '/blog'}
            className="mx-auto"
          >
            View All Articles
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;