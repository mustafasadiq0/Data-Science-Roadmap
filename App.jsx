import React, { useState } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import {
  BarChart3,
  BookOpen,
  Users,
  TrendingUp,
  Database,
  PieChart,
  LineChart,
  Target,
  ExternalLink,
  Play,
  FileText,
  Globe,
  Youtube,
  ChevronLeft,
  ChevronRight,
  HelpCircle,
  BookMarked
} from 'lucide-react'
import LearningPathDetails from './components/LearningPathDetails.jsx'
import Glossary from './components/Glossary.jsx'
import FAQ from './components/FAQ.jsx'
import './App.css'

function App() {
  const [currentSection, setCurrentSection] = useState("home")
  const [selectedPath, setSelectedPath] = useState(null)
  const [assessmentGoal, setAssessmentGoal] = useState(null)
  const [assessmentExperience, setAssessmentExperience] = useState(null)
  
  const stats = [
    { label: 'المتعلمين', value: '10,000+', icon: Users },
    { label: 'الدورات', value: '50+', icon: BookOpen },
    { label: 'المشاريع', value: '100+', icon: Target },
    { label: 'معدل النجاح', value: '95%', icon: TrendingUp }
  ]

  const learningPaths = [
    {
      id: 'excel',
      title: 'مسار Excel و Google Sheets',
      description: 'ابدأ رحلتك في تحليل البيانات باستخدام الأدوات الأساسية والمتاحة للجميع',
      icon: FileText,
      color: 'bg-green-500',
      lessons: 25,
      duration: '4 أسابيع',
      level: 'مبتدئ'
    },
    {
      id: 'powerbi',
      title: 'مسار Power BI و Data Studio',
      description: 'تعلم إنشاء لوحات المعلومات التفاعلية والتقارير الاحترافية',
      icon: BarChart3,
      color: 'bg-blue-500',
      lessons: 30,
      duration: '6 أسابيع',
      level: 'متوسط'
    },
    {
      id: 'python',
      title: 'مسار Python و Jupyter',
      description: 'اكتشف قوة البرمجة في تحليل البيانات مع Python وأشهر مكتباته',
      icon: Database,
      color: 'bg-purple-500',
      lessons: 40,
      duration: '8 أسابيع',
      level: 'متقدم'
    },
    {
      id: 'visualization',
      title: 'مسار التصور التفاعلي',
      description: 'تعلم فن عرض البيانات وإنشاء قصص مؤثرة من خلال الرسوم البيانية',
      icon: PieChart,
      color: 'bg-orange-500',
      lessons: 20,
      duration: '3 أسابيع',
      level: 'متوسط'
    }
  ]

  const mustafaResources = [
    {
      title: 'مدونة مصطفى صادق العلمية',
      description: 'مكتبة شاملة من المقالات والدروس التعليمية في مجال تقنية المعلومات',
      url: 'https://mustafasadiq0.wordpress.com',
      icon: Globe,
      type: 'مدونة'
    },
    {
      title: 'قناة يوتيوب مصطفى صادق',
      description: 'دروس فيديو متخصصة في البرمجة وتحليل البيانات والشبكات',
      url: 'https://youtube.com/@mustafasadiq',
      icon: Youtube,
      type: 'فيديو'
    }
  ]

  const renderHome = () => (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="text-center py-20 bg-gradient-to-br from-primary/10 to-accent/10 rounded-3xl">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            ابدأ من هنا... مسارك في عالم تحليل البيانات
          </h1>
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
            منصة تعليمية شاملة لتعلم تحليل البيانات من الصفر إلى الاحتراف، مع مسارات متخصصة ومشاريع عملية وموارد موثوقة
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Button size="lg" onClick={() => setCurrentSection('assessment')} className="text-lg px-8">
              ابدأ التقييم الآن
            </Button>
            <Button variant="outline" size="lg" onClick={() => setCurrentSection('paths')} className="text-lg px-8">
              استكشف المسارات
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <Card key={index} className="text-center hover:shadow-lg transition-shadow">
            <CardContent className="pt-6">
              <stat.icon className="h-12 w-12 mx-auto mb-4 text-primary" />
              <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
              <div className="text-muted-foreground">{stat.label}</div>
            </CardContent>
          </Card>
        ))}
      </section>

      {/* What is Data Analysis */}
      <section className="bg-card rounded-2xl p-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-center">ما هو تحليل البيانات؟</h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-lg leading-relaxed mb-6">
                تحليل البيانات هو عملية فحص وتنظيف وتحويل البيانات لاستخراج معلومات مفيدة واتخاذ قرارات مدروسة. 
                في عصرنا الحالي، أصبح تحليل البيانات مهارة أساسية في جميع المجالات.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>اتخاذ قرارات مدروسة بناءً على الأدلة</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>اكتشاف الأنماط والاتجاهات المخفية</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>تحسين الأداء وزيادة الكفاءة</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>التنبؤ بالاتجاهات المستقبلية</span>
                </li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-primary/20 to-accent/20 rounded-xl p-8 text-center">
              <LineChart className="h-24 w-24 mx-auto mb-4 text-primary" />
              <h3 className="text-xl font-semibold mb-2">البيانات في كل مكان</h3>
              <p className="text-muted-foreground">
                من وسائل التواصل الاجتماعي إلى التجارة الإلكترونية، البيانات تحيط بنا وتحليلها يفتح آفاقاً لا محدودة
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mustafa Sadiq Resources */}
      <section>
        <h2 className="text-3xl font-bold mb-8 text-center">المصادر التعليمية الأساسية</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {mustafaResources.map((resource, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <resource.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <CardTitle className="text-xl">{resource.title}</CardTitle>
                    <Badge variant="secondary">{resource.type}</Badge>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">{resource.description}</p>
                <Button variant="outline" className="w-full" asChild>
                  <a href={resource.url} target="_blank" rel="noopener noreferrer">
                    زيارة المصدر <ExternalLink className="mr-2 h-4 w-4" />
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  )

  const renderAssessment = () => {
    const getSuggestedPath = () => {
      if (assessmentGoal === 'business' && assessmentExperience === 'beginner') {
        return 'excel'
      } else if (assessmentGoal === 'business' && assessmentExperience === 'intermediate') {
        return 'powerbi'
      } else if (assessmentGoal === 'programming' && assessmentExperience === 'advanced') {
        return 'python'
      } else if (assessmentGoal === 'research' || assessmentGoal === 'personal') {
        return 'visualization'
      } else if (assessmentExperience === 'beginner') {
        return 'excel'
      } else if (assessmentExperience === 'intermediate') {
        return 'powerbi'
      } else if (assessmentExperience === 'advanced') {
        return 'python'
      }
      return null
    }

    const suggestedPathId = getSuggestedPath()

    return (
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">تقييم أولي - حدد مسارك</h1>
          <p className="text-xl text-muted-foreground">
            أجب على الأسئلة التالية لنساعدك في اختيار المسار الأنسب لأهدافك
          </p>
        </div>

        <div className="grid gap-6">
          <Card className="p-6">
            <h3 className="text-xl font-semibold mb-4">ما هو هدفك من تعلم تحليل البيانات؟</h3>
            <div className="grid gap-3">
              <Button 
                variant={assessmentGoal === 'business' ? 'default' : 'outline'}
                className="justify-start h-auto p-4"
                onClick={() => setAssessmentGoal('business')}
              >
                <div className="text-right">
                  <div className="font-medium">تحليل البيانات للأعمال</div>
                  <div className="text-sm text-muted-foreground">تحسين الأداء التجاري واتخاذ قرارات استراتيجية</div>
                </div>
              </Button>
              <Button 
                variant={assessmentGoal === 'research' ? 'default' : 'outline'}
                className="justify-start h-auto p-4"
                onClick={() => setAssessmentGoal('research')}
              >
                <div className="text-right">
                  <div className="font-medium">تحليل البيانات للأبحاث</div>
                  <div className="text-sm text-muted-foreground">إجراء البحوث الأكاديمية والعلمية</div>
                </div>
              </Button>
              <Button 
                variant={assessmentGoal === 'programming' ? 'default' : 'outline'}
                className="justify-start h-auto p-4"
                onClick={() => setAssessmentGoal('programming')}
              >
                <div className="text-right">
                  <div className="font-medium">تحليل البيانات للبرمجة</div>
                  <div className="text-sm text-muted-foreground">تطوير حلول تقنية وتطبيقات ذكية</div>
                </div>
              </Button>
              <Button 
                variant={assessmentGoal === 'personal' ? 'default' : 'outline'}
                className="justify-start h-auto p-4"
                onClick={() => setAssessmentGoal('personal')}
              >
                <div className="text-right">
                  <div className="font-medium">اتخاذ قرارات شخصية</div>
                  <div className="text-sm text-muted-foreground">فهم البيانات في الحياة اليومية</div>
                </div>
              </Button>
            </div>
          </Card>

          <Card className="p-6">
            <h3 className="text-xl font-semibold mb-4">ما هو مستوى خبرتك التقنية؟</h3>
            <div className="grid gap-3">
              <Button 
                variant={assessmentExperience === 'beginner' ? 'default' : 'outline'}
                className="justify-start h-auto p-4"
                onClick={() => setAssessmentExperience('beginner')}
              >
                <div className="text-right">
                  <div className="font-medium">مبتدئ</div>
                  <div className="text-sm text-muted-foreground">لا أملك خبرة سابقة في التقنية</div>
                </div>
              </Button>
              <Button 
                variant={assessmentExperience === 'intermediate' ? 'default' : 'outline'}
                className="justify-start h-auto p-4"
                onClick={() => setAssessmentExperience('intermediate')}
              >
                <div className="text-right">
                  <div className="font-medium">متوسط</div>
                  <div className="text-sm text-muted-foreground">أستخدم Excel وأدوات مكتبية أساسية</div>
                </div>
              </Button>
              <Button 
                variant={assessmentExperience === 'advanced' ? 'default' : 'outline'}
                className="justify-start h-auto p-4"
                onClick={() => setAssessmentExperience('advanced')}
              >
                <div className="text-right">
                  <div className="font-medium">متقدم</div>
                  <div className="text-sm text-muted-foreground">لدي خبرة في البرمجة أو التقنية</div>
                </div>
              </Button>
            </div>
          </Card>

          <div className="text-center">
            <Button 
              size="lg" 
              onClick={() => {
                if (suggestedPathId) {
                  setSelectedPath(suggestedPathId)
                  setCurrentSection('path-details')
                } else {
                  setCurrentSection('paths')
                }
              }}
              disabled={!assessmentGoal || !assessmentExperience}
            >
              {suggestedPathId ? 'عرض المسار المقترح' : 'عرض المسارات المقترحة'}
            </Button>
          </div>
        </div>
      </div>
    )
  }

  const renderPaths = () => (
    <div>
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">مسارات التعلم</h1>
        <p className="text-xl text-muted-foreground">
          اختر المسار الذي يناسب أهدافك ومستوى خبرتك
        </p>
      </div>

      <div className="grid gap-8">
        {learningPaths.map((path) => (
          <Card key={path.id} className="overflow-hidden hover:shadow-lg transition-shadow">
            <div className="flex">
              <div className={`w-2 ${path.color}`}></div>
              <div className="flex-1 p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-4">
                    <div className={`p-3 ${path.color} rounded-lg`}>
                      <path.icon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold">{path.title}</h3>
                      <p className="text-muted-foreground mt-2">{path.description}</p>
                    </div>
                  </div>
                  <Badge variant="outline">{path.level}</Badge>
                </div>
                
                <div className="flex gap-6 mb-6 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <BookOpen className="h-4 w-4" />
                    <span>{path.lessons} درس</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Target className="h-4 w-4" />
                    <span>{path.duration}</span>
                  </div>
                </div>

                <div className="flex gap-3">
                  <Button onClick={() => {
                    setSelectedPath(path.id)
                    setCurrentSection('path-details')
                  }}>
                    ابدأ المسار <Play className="mr-2 h-4 w-4" />
                  </Button>
                  <Button variant="outline" onClick={() => {
                    setSelectedPath(path.id)
                    setCurrentSection('path-details')
                  }}>
                    تفاصيل أكثر
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  )

  const renderNavigation = () => (
    <nav className="bg-card border-b sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-primary rounded-lg">
                <BarChart3 className="h-6 w-6 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold">مسارك في تحليل البيانات</span>
            </div>
            
            <div className="hidden md:flex gap-6">
              <Button 
                variant={currentSection === 'home' ? 'default' : 'ghost'}
                onClick={() => setCurrentSection('home')}
              >
                الرئيسية
              </Button>
              <Button 
                variant={currentSection === 'assessment' ? 'default' : 'ghost'}
                onClick={() => setCurrentSection('assessment')}
              >
                التقييم
              </Button>
              <Button 
                variant={currentSection === 'paths' ? 'default' : 'ghost'}
                onClick={() => setCurrentSection('paths')}
              >
                المسارات
              </Button>
              <Button 
                variant={currentSection === 'glossary' ? 'default' : 'ghost'}
                onClick={() => setCurrentSection('glossary')}
              >
                القاموس
              </Button>
              <Button 
                variant={currentSection === 'faq' ? 'default' : 'ghost'}
                onClick={() => setCurrentSection('faq')}
              >
                الأسئلة الشائعة
              </Button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )

  const renderContent = () => {
    switch (currentSection) {
      case 'assessment':
        return renderAssessment()
      case 'paths':
        return renderPaths()
      case 'path-details':
        return <LearningPathDetails 
          pathId={selectedPath} 
          onBack={() => setCurrentSection('paths')} 
        />
      case 'glossary':
        return <Glossary />
      case 'faq':
        return <FAQ />
      default:
        return renderHome()
    }
  }

  return (
    <div className="min-h-screen bg-background">
      {renderNavigation()}
      <main className="max-w-7xl mx-auto px-6 py-8">
        {renderContent()}
      </main>
      
      {/* Footer */}
      <footer className="bg-card border-t mt-20">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-primary rounded-lg">
                  <BarChart3 className="h-6 w-6 text-primary-foreground" />
                </div>
                <span className="text-xl font-bold">مسارك في تحليل البيانات</span>
              </div>
              <p className="text-muted-foreground">
                منصة تعليمية شاملة لتعلم تحليل البيانات من الصفر إلى الاحتراف
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">المصادر الأساسية</h4>
              <div className="space-y-2">
                <a href="https://mustafasadiq0.wordpress.com" target="_blank" rel="noopener noreferrer" 
                   className="block text-muted-foreground hover:text-primary transition-colors">
                  مدونة مصطفى صادق العلمية
                </a>
                <a href="https://youtube.com/@mustafasadiq" target="_blank" rel="noopener noreferrer"
                   className="block text-muted-foreground hover:text-primary transition-colors">
                  قناة يوتيوب مصطفى صادق
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">روابط مفيدة</h4>
              <div className="space-y-2">
                <button 
                  onClick={() => setCurrentSection('faq')}
                  className="block text-muted-foreground hover:text-primary transition-colors text-right"
                >
                  الأسئلة الشائعة
                </button>
                <button 
                  onClick={() => setCurrentSection('glossary')}
                  className="block text-muted-foreground hover:text-primary transition-colors text-right"
                >
                  قاموس المصطلحات
                </button>
                <a href="#" className="block text-muted-foreground hover:text-primary transition-colors">
                  تواصل معنا
                </a>
              </div>
            </div>
          </div>
          
          <div className="border-t mt-8 pt-8 text-center text-muted-foreground">
            <p>© 2024 مسارك في تحليل البيانات. جميع الحقوق محفوظة.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App

