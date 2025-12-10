import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Home, Info, Phone, ArrowRight, Plus, Pencil, Trash2, FileText, Globe } from 'lucide-react';
import ReactQuill from 'react-quill-new';
import 'react-quill-new/dist/quill.snow.css';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from '@/components/ui/checkbox';

export default function Webpages() {
    const pages = [
        {
            name: 'Home Page',
            description: 'Manage hero sliders, featured services, and welcome content.',
            path: '/home',
            icon: Home,
            color: 'text-blue-500'
        },
        {
            name: 'About Us',
            description: 'Update company history, mission, and team members.',
            path: '/about',
            icon: Info,
            color: 'text-green-500'
        },
        {
            name: 'Contact Us',
            description: 'Manage contact information, map location, and inquiry forms.',
            path: '/contact',
            icon: Phone,
            color: 'text-purple-500'
        }
    ];

    const [dynamicPages, setDynamicPages] = useState([
        { id: 1, title: 'Services', slug: 'services', status: true, content: '<p>Our services include...</p>' },
        { id: 2, title: 'FAQ', slug: 'faq', status: false, content: '<p>Frequently Asked Questions</p>' },
    ]);
    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const [currentPage, setCurrentPage] = useState(null);
    const [editorContent, setEditorContent] = useState('');

    const handleSave = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const newPage = {
            id: currentPage ? currentPage.id : Date.now(),
            title: formData.get('title'),
            slug: formData.get('slug'),
            status: false, // Default status
            content: editorContent,
        };

        if (currentPage) {
            setDynamicPages(dynamicPages.map(p => p.id === currentPage.id ? { ...newPage, status: currentPage.status } : p));
        } else {
            setDynamicPages([...dynamicPages, newPage]);
        }
        setIsDialogOpen(false);
        setCurrentPage(null);
        setEditorContent('');
    };

    const handleDelete = (id) => {
        if (confirm('Are you sure you want to delete this page?')) {
            setDynamicPages(dynamicPages.filter(p => p.id !== id));
        }
    };

    const openEdit = (page) => {
        setCurrentPage(page);
        setEditorContent(page.content || '');
        setIsDialogOpen(true);
    };

    const openAdd = () => {
        setCurrentPage(null);
        setEditorContent('');
        setIsDialogOpen(true);
    };

    return (
        <div className="space-y-8">
            <div className="space-y-6">
                <div>
                    <h2 className="text-3xl font-bold tracking-tight">Webpages</h2>
                    <p className="text-muted-foreground">Manage the content and design of your website pages.</p>
                </div>

                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {pages.map((page) => (
                        <Card key={page.path} className="hover:shadow-lg transition-shadow">
                            <CardHeader>
                                <div className="flex items-center gap-4">
                                    <div className={`p-2 rounded-lg bg-muted ${page.color}`}>
                                        <page.icon className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <CardTitle className="text-xl">{page.name}</CardTitle>
                                    </div>
                                </div>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <CardDescription className="text-base">
                                    {page.description}
                                </CardDescription>
                                <Button asChild className="w-full group">
                                    <Link to={page.path}>
                                        Edit Page
                                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                                    </Link>
                                </Button>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>

            <div className="space-y-6">
                <div className="flex items-center justify-between">
                    <div>
                        <h2 className="text-2xl font-bold tracking-tight">Dynamic Webpages</h2>
                        <p className="text-muted-foreground">Create and manage custom pages for your website.</p>
                    </div>
                    <Button onClick={openAdd}>
                        <Plus className="w-4 h-4 mr-2" /> Create New Page
                    </Button>
                </div>

                <Card>
                    <CardContent className="p-0">
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead>Page Title</TableHead>
                                    <TableHead>URL Slug</TableHead>
                                    <TableHead>Status</TableHead>
                                    <TableHead className="text-right">Actions</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {dynamicPages.map((page) => (
                                    <TableRow key={page.id}>
                                        <TableCell className="font-medium">
                                            <div className="flex items-center gap-2">
                                                <FileText className="w-4 h-4 text-muted-foreground" />
                                                {page.title}
                                            </div>
                                        </TableCell>
                                        <TableCell>
                                            <div className="flex items-center gap-2 text-muted-foreground">
                                                <Globe className="w-3 h-3" />
                                                /{page.slug}
                                            </div>
                                        </TableCell>
                                        <TableCell>
                                            <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${page.status === true
                                                ? 'bg-green-100 text-green-800'
                                                : 'bg-yellow-100 text-yellow-800'
                                                }`}>
                                                {page.status ? 'Published' : 'Draft'}
                                            </span>
                                        </TableCell>
                                        <TableCell className="text-right">
                                            <div className="flex justify-end gap-2">
                                                <Button variant="ghost" size="icon" onClick={() => openEdit(page)}>
                                                    <Pencil className="w-4 h-4" />
                                                </Button>
                                                <Button variant="ghost" size="icon" className="text-destructive hover:text-destructive" onClick={() => handleDelete(page.id)}>
                                                    <Trash2 className="w-4 h-4" />
                                                </Button>
                                            </div>
                                        </TableCell>
                                    </TableRow>
                                ))}
                                {dynamicPages.length === 0 && (
                                    <TableRow>
                                        <TableCell colSpan={4} className="text-center h-24 text-muted-foreground">
                                            No dynamic pages found. Create one to get started.
                                        </TableCell>
                                    </TableRow>
                                )}
                            </TableBody>
                        </Table>
                    </CardContent>
                </Card>
            </div>

            <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                <DialogContent className="max-w-3xl">
                    <DialogHeader>
                        <DialogTitle>{currentPage ? 'Edit Page' : 'Create New Page'}</DialogTitle>
                        <DialogDescription>
                            {currentPage ? 'Update page details.' : 'Add a new dynamic page to your website.'}
                        </DialogDescription>
                    </DialogHeader>
                    <form onSubmit={handleSave} className="space-y-4">
                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <Label htmlFor="title">Page Title</Label>
                                <Input id="title" name="title" defaultValue={currentPage?.title} placeholder="e.g. Our Services" required />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="slug">URL Slug</Label>
                                <div className="flex items-center gap-2">
                                    <span className="text-muted-foreground text-sm">/</span>
                                    <Input id="slug" name="slug" defaultValue={currentPage?.slug} placeholder="our-services" required />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="status">Status</Label>
                                <div className="flex items-center gap-3">
                                    <Checkbox id="terms" />
                                    <Label htmlFor="terms">Publish webpage now?</Label>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-2">
                            <Label>Content</Label>
                            <div className="h-[300px] mb-12">
                                <ReactQuill
                                    theme="snow"
                                    value={editorContent}
                                    onChange={setEditorContent}
                                    className="h-full"
                                />
                            </div>
                        </div>

                        <DialogFooter>
                            <Button type="button" variant="outline" onClick={() => setIsDialogOpen(false)}>Cancel</Button>
                            <Button type="submit">Save Page</Button>
                        </DialogFooter>
                    </form>
                </DialogContent>
            </Dialog>
        </div>
    );
}
