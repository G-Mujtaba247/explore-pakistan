import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Home, Info, Phone, ArrowRight, Plus, Pencil, Trash2, FileText, Globe, Map } from 'lucide-react';
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
    // Static pages configuration for Explore Pakistan
    const pages = [
        {
            name: 'Home Page',
            description: 'Manage hero sliders, featured destinations, and welcome content.',
            path: '/dashboard/cms/home',
            icon: Home,
            color: 'text-blue-500'
        },
        {
            name: 'About Us',
            description: 'Update company history, mission, and team members.',
            path: '/dashboard/cms/about',
            icon: Info,
            color: 'text-green-500'
        },
        {
            name: 'Contact Us',
            description: 'Manage contact information, map location, and inquiry forms.',
            path: '/dashboard/cms/contact',
            icon: Phone,
            color: 'text-purple-500'
        },
        {
            name: 'Tours Page',
            description: 'Manage travel guidelines and general tour information.',
            path: '/dashboard/cms/tours',
            icon: Map,
            color: 'text-orange-500'
        }
    ];

    const [dynamicPages, setDynamicPages] = useState([
        { id: 1, title: 'Privacy Policy', slug: 'privacy-policy', status: true, content: '<p>Standard Privacy Policy...</p>' },
        { id: 2, title: 'Terms & Conditions', slug: 'terms', status: true, content: '<p>Terms of service...</p>' },
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
            status: true, // Defaulting to true for demo
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
                    <h2 className="text-3xl font-bold tracking-tight">Webpages Content</h2>
                    <p className="text-muted-foreground">Manage the content and design of your website pages.</p>
                </div>

                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                    {pages.map((page) => (
                        <Card key={page.path} className="hover:shadow-lg transition-shadow">
                            <CardHeader>
                                <div className="flex items-center gap-4">
                                    <div className={`p-2 rounded-lg bg-muted ${page.color}`}>
                                        <page.icon className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <CardTitle className="text-lg">{page.name}</CardTitle>
                                    </div>
                                </div>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <CardDescription className="text-sm min-h-[40px]">
                                    {page.description}
                                </CardDescription>
                                <Button asChild className="w-full group" variant="outline">
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
                        <p className="text-muted-foreground">Create and manage custom pages (e.g., Privacy Policy).</p>
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
                                                ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400'
                                                : 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400'
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
                            </TableBody>
                        </Table>
                    </CardContent>
                </Card>
            </div>

            <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
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
                                <Input id="title" name="title" defaultValue={currentPage?.title} placeholder="e.g. Terms of Service" required />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="slug">URL Slug</Label>
                                <div className="flex items-center gap-2">
                                    <span className="text-muted-foreground text-sm">/</span>
                                    <Input id="slug" name="slug" defaultValue={currentPage?.slug} placeholder="terms-of-service" required />
                                </div>
                            </div>
                        </div>

                        <div className="space-y-2">
                            <Label>Content</Label>
                            <div className="mb-4">
                                <ReactQuill
                                    theme="snow"
                                    value={editorContent}
                                    onChange={setEditorContent}
                                    className="h-[300px] mb-12"
                                />
                            </div>
                        </div>

                        <DialogFooter className="mt-8">
                            <Button type="button" variant="outline" onClick={() => setIsDialogOpen(false)}>Cancel</Button>
                            <Button type="submit">Save Page</Button>
                        </DialogFooter>
                    </form>
                </DialogContent>
            </Dialog>
        </div>
    );
}
