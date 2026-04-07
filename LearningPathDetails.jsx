import React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Button } from '@/components/ui/button.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { 
  ExternalLink, 
  Play, 
  FileText, 
  Database, 
  BarChart3, 
  PieChart,
  CheckCircle,
  Clock,
  Users
} from 'lucide-react'

const LearningPathDetails = ({ pathId, onBack }) => {
  const pathsData = {
    excel: {
      title: 'مسار Excel و Google Sheets',
      description: 'ابدأ رحلتك في تحليل البيانات باستخدام الأدوات الأساسية والمتاحة للجميع',
      icon: FileText,
      color: 'bg-green-500',
      level: 'مبتدئ',
      duration: '4 أسابيع',
      students: '5,000+',
      modules: [
        {
          title: 'الأساسيات',
          lessons: [
            'مقدمة في Excel وGoogle Sheets',
            'واجهة البرنامج والتنقل',
            'إدخال البيانات وتنسيقها',
            'الدوال الأساسية (SUM, AVERAGE, COUNT)'
          ]
        },
        {
          title: 'التحليل المتوسط',
          lessons: [
            'الدوال المتقدمة (VLOOKUP, INDEX, MATCH)',
            'الجداول المحورية (Pivot Tables)',
            'التصفية والترتيب المتقدم',
            'التنسيق الشرطي'
          ]
        },
        {
          title: 'التصور والرسوم البيانية',
          lessons: [
            'إنشاء الرسوم البيانية الأساسية',
            'تخصيص الرسوم البيانية',
            'لوحات المعلومات البسيطة',
            'طباعة وتصدير التقارير'
          ]
        },
        {
          title: 'مشاريع عملية',
          lessons: [
            'تحليل بيانات المبيعات',
            'تتبع الميزانية الشخصية',
            'تحليل استطلاع رأي',
            'مشروع تخرج شامل'
          ]
        }
      ],
      resources: [
        {
          title: 'دروس Excel من مدونة مصطفى صادق',
          url: 'https://mustafasadiq0.wordpress.com/مكتبة-الشروحات-العربية/',
          type: 'مقال'
        },
        {
          title: 'كورس Excel 2010 - قناة مصطفى صادق',
          url: 'https://www.youtube.com/playlist?list=PL9594899AADDF1608',
          type: 'فيديو'
        }
      ],
      tools: [
        'Microsoft Excel',
        'Google Sheets',
        'LibreOffice Calc',
        'Numbers (Mac)'
      ]
    },
    powerbi: {
      title: 'مسار Power BI و Data Studio',
      description: 'تعلم إنشاء لوحات المعلومات التفاعلية والتقارير الاحترافية',
      icon: BarChart3,
      color: 'bg-blue-500',
      level: 'متوسط',
      duration: '6 أسابيع',
      students: '3,000+',
      modules: [
        {
          title: 'مقدمة في الذكاء التجاري',
          lessons: [
            'ما هو الذكاء التجاري؟',
            'مقدمة في Power BI',
            'تثبيت وإعداد Power BI Desktop',
            'واجهة Power BI والتنقل'
          ]
        },
        {
          title: 'استيراد وتحضير البيانات',
          lessons: [
            'مصادر البيانات المختلفة',
            'استيراد البيانات من Excel وCSV',
            'تنظيف وتحويل البيانات',
            'Power Query Editor'
          ]
        },
        {
          title: 'إنشاء التصورات',
          lessons: [
            'أنواع الرسوم البيانية في Power BI',
            'تخصيص التصورات',
            'المرشحات والتقطيع',
            'التفاعل بين التصورات'
          ]
        },
        {
          title: 'لوحات المعلومات المتقدمة',
          lessons: [
            'تصميم لوحة معلومات احترافية',
            'مشاركة التقارير',
            'Power BI Service',
            'التحديث التلقائي للبيانات'
          ]
        }
      ],
      resources: [
        {
          title: 'مقالات الذكاء التجاري - مدونة مصطفى صادق',
          url: 'https://mustafasadiq0.wordpress.com',
          type: 'مقال'
        }
      ],
      tools: [
        'Microsoft Power BI',
        'Google Data Studio',
        'Tableau Public',
        'Qlik Sense'
      ]
    },
    python: {
      title: 'مسار Python و Jupyter',
      description: 'اكتشف قوة البرمجة في تحليل البيانات مع Python وأشهر مكتباته',
      icon: Database,
      color: 'bg-purple-500',
      level: 'متقدم',
      duration: '8 أسابيع',
      students: '2,000+',
      modules: [
        {
          title: 'أساسيات Python',
          lessons: [
            'مقدمة في Python وتثبيت البيئة',
            'المتغيرات وأنواع البيانات',
            'الحلقات والشروط',
            'الدوال والمكتبات'
          ]
        },
        {
          title: 'مكتبات تحليل البيانات',
          lessons: [
            'مقدمة في NumPy',
            'التعامل مع Pandas',
            'قراءة وكتابة الملفات',
            'تنظيف وتحضير البيانات'
          ]
        },
        {
          title: 'تصور البيانات',
          lessons: [
            'مكتبة Matplotlib',
            'مكتبة Seaborn',
            'رسوم بيانية تفاعلية مع Plotly',
            'أفضل ممارسات التصور'
          ]
        },
        {
          title: 'التحليل الإحصائي',
          lessons: [
            'الإحصاء الوصفي',
            'اختبار الفرضيات',
            'الارتباط والانحدار',
            'مقدمة في التعلم الآلي'
          ]
        }
      ],
      resources: [
        {
          title: 'سلسلة دروس Python - مدونة مصطفى صادق',
          url: 'https://mustafasadiq0.wordpress.com/?s=بايثون',
          type: 'مقال'
        },
        {
          title: 'دروس تحليل البيانات بـ Python',
          url: 'https://mustafasadiq0.wordpress.com/2018/04/30/بايثون-31-تحليل-البيانات-بلغة-بايثون-المشروع-الاول-4/',
          type: 'مقال'
        }
      ],
      tools: [
        'Python',
        'Jupyter Notebook',
        'Google Colab',
        'Anaconda',
        'VS Code'
      ]
    },
    visualization: {
      title: 'مسار التصور التفاعلي',
      description: 'تعلم فن عرض البيانات وإنشاء قصص مؤثرة من خلال الرسوم البيانية',
      icon: PieChart,
      color: 'bg-orange-500',
      level: 'متوسط',
      duration: '3 أسابيع',
      students: '4,000+',
      modules: [
        {
          title: 'مبادئ التصور',
          lessons: [
            'نظرية التصور البصري',
            'اختيار النوع المناسب من الرسوم',
            'الألوان والتصميم',
            'أخطاء شائعة في التصور'
          ]
        },
        {
          title: 'أدوات التصور',
          lessons: [
            'مقارنة بين أدوات التصور',
            'Tableau Public للمبتدئين',
            'D3.js للمطورين',
            'أدوات التصور المجانية'
          ]
        },
        {
          title: 'قصص البيانات',
          lessons: [
            'كيفية بناء قصة من البيانات',
            'التسلسل المنطقي للمعلومات',
            'التفاعل مع الجمهور',
            'عرض النتائج بفعالية'
          ]
        }
      ],
      resources: [
        {
          title: 'مقالات التصور - مدونة مصطفى صادق',
          url: 'https://mustafasadiq0.wordpress.com',
          type: 'مقال'
        }
      ],
      tools: [
        'Tableau Public',
        'D3.js',
        'Chart.js',
        'Plotly',
        'Canva'
      ]
    }
  }

  const currentPath = pathsData[pathId]

  if (!currentPath) {
    return <div>المسار غير موجود</div>
  }

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center gap-4 mb-8">
        <Button variant="outline" onClick={onBack}>
          ← العودة للمسارات
        </Button>
      </div>

      {/* Path Overview */}
      <Card className="overflow-hidden">
        <div className="flex">
          <div className={`w-2 ${currentPath.color}`}></div>
          <div className="flex-1 p-8">
            <div className="flex items-start justify-between mb-6">
              <div className="flex items-center gap-4">
                <div className={`p-4 ${currentPath.color} rounded-xl`}>
                  <currentPath.icon className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h1 className="text-3xl font-bold">{currentPath.title}</h1>
                  <p className="text-lg text-muted-foreground mt-2">{currentPath.description}</p>
                </div>
              </div>
              <Badge variant="outline" className="text-lg px-4 py-2">{currentPath.level}</Badge>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="flex items-center gap-3">
                <Clock className="h-5 w-5 text-primary" />
                <div>
                  <div className="font-medium">المدة</div>
                  <div className="text-sm text-muted-foreground">{currentPath.duration}</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Users className="h-5 w-5 text-primary" />
                <div>
                  <div className="font-medium">المتعلمين</div>
                  <div className="text-sm text-muted-foreground">{currentPath.students}</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="h-5 w-5 text-primary" />
                <div>
                  <div className="font-medium">معدل الإكمال</div>
                  <div className="text-sm text-muted-foreground">85%</div>
                </div>
              </div>
            </div>

            <Button size="lg" className="text-lg px-8">
              ابدأ المسار الآن <Play className="mr-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </Card>

      {/* Modules */}
      <div>
        <h2 className="text-2xl font-bold mb-6">محتوى المسار</h2>
        <div className="space-y-4">
          {currentPath.modules.map((module, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">
                    {index + 1}
                  </div>
                  {module.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid gap-2">
                  {module.lessons.map((lesson, lessonIndex) => (
                    <div key={lessonIndex} className="flex items-center gap-3 p-2 rounded hover:bg-muted/50">
                      <Play className="h-4 w-4 text-muted-foreground" />
                      <span>{lesson}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Resources */}
      <div>
        <h2 className="text-2xl font-bold mb-6">المصادر التعليمية</h2>
        <div className="grid gap-4">
          {currentPath.resources.map((resource, index) => (
            <Card key={index}>
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-medium">{resource.title}</h3>
                    <Badge variant="secondary" className="mt-1">{resource.type}</Badge>
                  </div>
                  <Button variant="outline" size="sm" asChild>
                    <a href={resource.url} target="_blank" rel="noopener noreferrer">
                      زيارة <ExternalLink className="mr-2 h-4 w-4" />
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Tools */}
      <div>
        <h2 className="text-2xl font-bold mb-6">الأدوات المطلوبة</h2>
        <div className="flex flex-wrap gap-2">
          {currentPath.tools.map((tool, index) => (
            <Badge key={index} variant="outline" className="text-sm px-3 py-1">
              {tool}
            </Badge>
          ))}
        </div>
      </div>
    </div>
  )
}

export default LearningPathDetails

