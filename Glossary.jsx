import React, { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Input } from '@/components/ui/input.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Search } from 'lucide-react'

const Glossary = () => {
  const [searchTerm, setSearchTerm] = useState('')

  const terms = [
    {
      term: 'تحليل البيانات',
      english: 'Data Analysis',
      definition: 'عملية فحص وتنظيف وتحويل ونمذجة البيانات لاكتشاف معلومات مفيدة واستخلاص النتائج ودعم اتخاذ القرارات.',
      category: 'أساسي'
    },
    {
      term: 'علوم البيانات',
      english: 'Data Science',
      definition: 'مجال متعدد التخصصات يستخدم الأساليب العلمية والعمليات والخوارزميات والأنظمة لاستخراج المعرفة والرؤى من البيانات.',
      category: 'أساسي'
    },
    {
      term: 'البيانات الضخمة',
      english: 'Big Data',
      definition: 'مجموعات البيانات الكبيرة والمعقدة التي تتطلب أدوات وتقنيات خاصة للتعامل معها وتحليلها.',
      category: 'متقدم'
    },
    {
      term: 'التعلم الآلي',
      english: 'Machine Learning',
      definition: 'فرع من الذكاء الاصطناعي يركز على بناء أنظمة يمكنها التعلم من البيانات وتحسين أدائها تلقائياً.',
      category: 'متقدم'
    },
    {
      term: 'لوحة المعلومات',
      english: 'Dashboard',
      definition: 'واجهة مرئية تعرض المعلومات والمؤشرات الرئيسية بطريقة سهلة الفهم والمتابعة.',
      category: 'أساسي'
    },
    {
      term: 'الذكاء التجاري',
      english: 'Business Intelligence',
      definition: 'مجموعة من التقنيات والأدوات والممارسات لجمع وتحليل وعرض معلومات الأعمال لدعم اتخاذ القرارات.',
      category: 'متوسط'
    },
    {
      term: 'تصور البيانات',
      english: 'Data Visualization',
      definition: 'تمثيل البيانات والمعلومات بصرياً باستخدام الرسوم البيانية والخرائط والمخططات.',
      category: 'أساسي'
    },
    {
      term: 'تنظيف البيانات',
      english: 'Data Cleaning',
      definition: 'عملية اكتشاف وتصحيح أو إزالة البيانات الخاطئة أو غير الدقيقة أو غير ذات الصلة من مجموعة البيانات.',
      category: 'أساسي'
    },
    {
      term: 'قاعدة البيانات',
      english: 'Database',
      definition: 'مجموعة منظمة من البيانات المخزنة والمنظمة بحيث يمكن الوصول إليها وإدارتها وتحديثها بسهولة.',
      category: 'أساسي'
    },
    {
      term: 'الإحصاء الوصفي',
      english: 'Descriptive Statistics',
      definition: 'فرع من الإحصاء يهتم بوصف وتلخيص البيانات باستخدام المقاييس مثل المتوسط والوسيط والانحراف المعياري.',
      category: 'متوسط'
    },
    {
      term: 'الإحصاء الاستنتاجي',
      english: 'Inferential Statistics',
      definition: 'فرع من الإحصاء يستخدم عينة من البيانات لاستخلاص استنتاجات حول مجتمع أكبر.',
      category: 'متقدم'
    },
    {
      term: 'الارتباط',
      english: 'Correlation',
      definition: 'مقياس إحصائي يوضح قوة واتجاه العلاقة الخطية بين متغيرين.',
      category: 'متوسط'
    },
    {
      term: 'الانحدار',
      english: 'Regression',
      definition: 'تقنية إحصائية تستخدم لنمذجة العلاقة بين متغير تابع ومتغير أو أكثر من المتغيرات المستقلة.',
      category: 'متقدم'
    },
    {
      term: 'مؤشر الأداء الرئيسي',
      english: 'KPI (Key Performance Indicator)',
      definition: 'مقياس قابل للقياس يوضح مدى فعالية الشركة في تحقيق أهدافها التجارية الرئيسية.',
      category: 'متوسط'
    },
    {
      term: 'التنقيب في البيانات',
      english: 'Data Mining',
      definition: 'عملية اكتشاف الأنماط والمعلومات المفيدة من مجموعات البيانات الكبيرة باستخدام تقنيات مختلفة.',
      category: 'متقدم'
    },
    {
      term: 'البيانات المنظمة',
      english: 'Structured Data',
      definition: 'البيانات المنظمة في تنسيق محدد مسبقاً، مثل الجداول في قواعد البيانات العلائقية.',
      category: 'متوسط'
    },
    {
      term: 'البيانات غير المنظمة',
      english: 'Unstructured Data',
      definition: 'البيانات التي لا تتبع نموذجاً أو تنسيقاً محدداً مسبقاً، مثل النصوص والصور والفيديوهات.',
      category: 'متقدم'
    },
    {
      term: 'معالجة اللغة الطبيعية',
      english: 'Natural Language Processing (NLP)',
      definition: 'فرع من الذكاء الاصطناعي يهتم بالتفاعل بين الحاسوب واللغة البشرية الطبيعية.',
      category: 'متقدم'
    },
    {
      term: 'الخوارزمية',
      english: 'Algorithm',
      definition: 'مجموعة من القواعد أو التعليمات المحددة لحل مشكلة أو إكمال مهمة معينة.',
      category: 'متوسط'
    },
    {
      term: 'النموذج التنبؤي',
      english: 'Predictive Model',
      definition: 'نموذج رياضي يستخدم البيانات التاريخية للتنبؤ بالأحداث أو النتائج المستقبلية.',
      category: 'متقدم'
    }
  ]

  const categories = ['الكل', 'أساسي', 'متوسط', 'متقدم']
  const [selectedCategory, setSelectedCategory] = useState('الكل')

  const filteredTerms = terms.filter(term => {
    const matchesSearch = term.term.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         term.english.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         term.definition.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === 'الكل' || term.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  const getCategoryColor = (category) => {
    switch (category) {
      case 'أساسي': return 'bg-green-100 text-green-800'
      case 'متوسط': return 'bg-blue-100 text-blue-800'
      case 'متقدم': return 'bg-purple-100 text-purple-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">قاموس مصطلحات تحليل البيانات</h1>
        <p className="text-xl text-muted-foreground">
          دليل شامل للمصطلحات الأساسية في عالم تحليل البيانات
        </p>
      </div>

      {/* Search and Filter */}
      <div className="space-y-4">
        <div className="relative">
          <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
          <Input
            placeholder="ابحث عن مصطلح..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pr-10"
          />
        </div>

        <div className="flex gap-2 flex-wrap">
          {categories.map(category => (
            <Badge
              key={category}
              variant={selectedCategory === category ? 'default' : 'outline'}
              className="cursor-pointer"
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </Badge>
          ))}
        </div>
      </div>

      {/* Terms Grid */}
      <div className="grid gap-4">
        {filteredTerms.map((term, index) => (
          <Card key={index} className="hover:shadow-md transition-shadow">
            <CardHeader className="pb-3">
              <div className="flex items-start justify-between">
                <div>
                  <CardTitle className="text-xl">{term.term}</CardTitle>
                  <p className="text-sm text-muted-foreground english-text mt-1">
                    {term.english}
                  </p>
                </div>
                <Badge className={getCategoryColor(term.category)}>
                  {term.category}
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <p className="leading-relaxed">{term.definition}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {filteredTerms.length === 0 && (
        <div className="text-center py-12">
          <p className="text-muted-foreground text-lg">لم يتم العثور على مصطلحات مطابقة للبحث</p>
        </div>
      )}

      <div className="text-center text-muted-foreground">
        <p>عدد المصطلحات: {filteredTerms.length} من أصل {terms.length}</p>
      </div>
    </div>
  )
}

export default Glossary

